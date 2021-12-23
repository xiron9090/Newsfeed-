import {Action} from 'redux';

export const GET_DEVICE_LANGUAGE_REQUEST = 'GET_DEVICE_LANGUAGE_REQUEST';
export const GET_DEVICE_LANGUAGE_SUCCESS = 'GET_DEVICE_LANGUAGE_SUCCESS';
export const GET_DEVICE_LANGUAGE_FAILURE = 'GET_DEVICE_LANGUAGE_FAILURE';

export const GET_DEVICE_THEME_REQUEST = 'GET_DEVICE_THEME_REQUEST';
export const GET_DEVICE_THEME_SUCCESS = 'GET_DEVICE_THEME_SUCCESS';
export const GET_DEVICE_THEME_FAILURE = 'GET_DEVICE_THEME_FAILURE';

export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
export const CHANGE_THEME = 'CHANGE_THEME';

export type GET_DEVICE_LANGUAGE_REQUEST = Action<
  typeof GET_DEVICE_LANGUAGE_REQUEST
>;
export type GET_DEVICE_LANGUAGE_SUCCESS = Action<
  typeof GET_DEVICE_LANGUAGE_SUCCESS
> & {
  data: any;
};
export type GET_DEVICE_LANGUAGE_FAILURE = Action<
  typeof GET_DEVICE_LANGUAGE_FAILURE
> & {
  data: {error: any};
};

export type GET_DEVICE_THEME_REQUEST = Action<typeof GET_DEVICE_THEME_REQUEST>;
export type GET_DEVICE_THEME_SUCCESS = Action<
  typeof GET_DEVICE_THEME_SUCCESS
> & {
  data: any;
};
export type GET_DEVICE_THEME_FAILURE = Action<
  typeof GET_DEVICE_THEME_FAILURE
> & {
  data: {error: any};
};
export type CHANGE_LANGUAGE = Action<typeof CHANGE_LANGUAGE> & {
  data: any;
};
export type CHANGE_THEME = Action<typeof CHANGE_THEME> & {
  data: any;
};

export type SETTINGS_ACTIONS_TYPE =
  | GET_DEVICE_LANGUAGE_REQUEST
  | GET_DEVICE_LANGUAGE_SUCCESS
  | GET_DEVICE_LANGUAGE_FAILURE
  | GET_DEVICE_THEME_REQUEST
  | GET_DEVICE_THEME_SUCCESS
  | GET_DEVICE_THEME_FAILURE
  | CHANGE_LANGUAGE
  | CHANGE_THEME;