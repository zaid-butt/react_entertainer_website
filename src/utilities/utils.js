export const setEncryptedUrlparams = (data) => {
  return `?${new URLSearchParams({
    query: btoa(JSON.stringify(data)),
  })}`;
};
