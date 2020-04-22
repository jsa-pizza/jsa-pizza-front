import React, { useCallback, useEffect } from 'react';
import { Feedback } from 'components';
import * as api from 'lib/api';
import { useDispatch, useSelector } from 'react-redux';
import { update } from 'modules/feedback';
import { showSnackbar } from 'modules/snackbar';

export default function FeedbackContainer() {
  const { feedback } = useSelector((state) => (state.feedback));
  // 디스패치
  const dispatch = useDispatch();
  const Update = useCallback((list) => dispatch((update(list))), [dispatch]);
  const ShowSnackbar = useCallback((list) => dispatch((showSnackbar(list))), [dispatch]);

  useEffect(() => {
    Update({ feedback: '' });
  }, []);

  function handleUpdate(e) {
    Update({ feedback: e });
  }
  function handleSubmit() {
    if (feedback !== '') {
      api.postFeedback(feedback)
        .then(() => {
          ShowSnackbar({ content: '제출성공! 피드백 감사합니다!' });
          Update({ feedback: '' });
        });
    }
  }

  return (
    <Feedback
      handleUpdate={handleUpdate}
      handleSubmit={handleSubmit}
      feedback={feedback}
    />
  );
}
