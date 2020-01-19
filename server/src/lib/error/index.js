import errorList from "./errors";

export default function(errors) {
  for (const error of errors) {
    for (const errorType of errorList) {
      error.message = replaceError(
        error,
        errorType.original,
        errorType.replacement
      );
    }
  }
  return errors;
}

function replaceError(error, original, replacement) {
  return error && error.message === original ? replacement : error.message;
}
