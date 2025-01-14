import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    // 리듀서를 여기에 추가
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
