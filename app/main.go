package main

import (
	"encoding/json"
	"log"
	"net/http"
	"os"

	"github.com/rs/cors"
	"github.com/slack-go/slack"
	"github.com/tomotakashimizu/send-slack-workflow/app/oapi"
	"gopkg.in/yaml.v3"
)

type Server struct{}

type Config struct {
	SlackToken string `yaml:"slack_token"`
}

func loadConfig(filename string) (*Config, error) {
	data, err := os.ReadFile(filename)
	if err != nil {
		return nil, err
	}

	var config Config
	err = yaml.Unmarshal(data, &config)
	if err != nil {
		return nil, err
	}

	return &config, nil
}

func (s *Server) PostPostMessage(w http.ResponseWriter, r *http.Request) {
	var body oapi.PostPostMessageJSONRequestBody
	if err := json.NewDecoder(r.Body).Decode(&body); err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	config, err := loadConfig("config.yaml")
	if err != nil {
		log.Fatalf("Failed to load configuration: %v", err)
	}

	api := slack.New(config.SlackToken)
	_, _, err = api.PostMessage(*body.Channel, slack.MsgOptionText(*body.Message, false))
	if err != nil {
		http.Error(w, "Failed to post message to Slack", http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(map[string]string{"status": "success"})
}

func main() {
	handler := oapi.Handler(&Server{})
	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"*"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE"},
		AllowedHeaders:   []string{"*"},
		AllowCredentials: true,
	})
	http.ListenAndServe(":8080", c.Handler(handler))
}
