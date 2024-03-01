const apiRequest = async (url = "", optionsObj = null, errMsg = null) => {
  try {
    const res = await fetch(url, optionsObj);
    if (!res.ok) throw Error("Please reload the App");
  } catch (err) {
    errMsg = err.stack;
  } finally {
    return errMsg;
  }
};

export default apiRequest;
