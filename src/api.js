const apiLocalStorage = {
  getState() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(localStorage.getItem("state"));
      }, 1000);
    }).catch((error) => {
      console.log("api", error);
    });
  },

  addMessage(payload) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    })
      .then(() => {
        const stateJson = localStorage.getItem("state");
        const state = stateJson ? JSON.parse(stateJson) : {};
        if (state.messages) {
          state.messages.unshift(payload);
        } else {
          state.messages = [payload];
        }

        localStorage.setItem("state", JSON.stringify(state));
      })
      .catch((error) => {
        console.log("api", error);
      });
  },

  addComment({ messageId, comment }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    })
      .then(() => {
        const stateJson = localStorage.getItem("state");
        const state = stateJson ? JSON.parse(stateJson) : {};
        const message = state.messages.find((item) => item.id === messageId);
        message.comments = [...(message.comments || []), comment];
        localStorage.setItem("state", JSON.stringify(state));
      })
      .catch((error) => {
        console.log("api", error);
      });
  },
};

export default apiLocalStorage;
