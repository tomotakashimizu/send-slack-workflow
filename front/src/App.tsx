import * as React from 'react';
import * as SlackWorkflowModal from '@/components/SlackWorkflowModal';

export const Component = () => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>モーダルを表示</button>
      {showModal && <SlackWorkflowModal.Component />}
    </div>
  );
};

Component.displayName = 'App';
