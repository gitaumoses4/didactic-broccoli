import { UPDATE_PROFILE } from '../types/index';

export const updateProfile = (name, age) => {
  return {
    type: UPDATE_PROFILE,
    data: { name, age }
  }
};
