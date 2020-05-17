import { getElement } from '../utils';

export const handleUsersUpdate = users => {
  const usersSelect = getElement('#message-to');
  const selectedValue = usersSelect.value;
  const hasUser = users.find(({ username }) => username === selectedValue);

  const options = users.map(
    ({ username }) => `<option value="${username}">${username}</option>`
  );

  usersSelect.innerHTML = options.join('');

  if (hasUser) {
    usersSelect.value = selectedValue;
  }
};
