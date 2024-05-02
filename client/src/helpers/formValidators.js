export const validateBlankValue = (value) => {
    const re = /^$|null$/
    return re.test(String(value));
  };

  export const validateUserName = (username) => {
    var userName = /^([a-z0-9]){4,20}$/gm;
    return username.match(userName);
  };
  
  export const validateInputSize = (value, len) => {
    return value.length >= len;
  };
  
  export const isNumber = (value) => {
    return !isNaN(value);
  };
  
  export const validateDescription = (description) => {
    var descriptionRegex = /^[a-zA-Z\s]+$/;
    return descriptionRegex.test(description);
  };
  export const validateActors = (input) => {
    var regex = /^[a-zA-Z,\s]+$/;
    return regex.test(input);
  };
  