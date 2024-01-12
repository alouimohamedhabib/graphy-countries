import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { ContinentSlice } from './containers/Continents/ContinentSlice';

export const store = configureStore({
  reducer: {
    continent: ContinentSlice.reducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
