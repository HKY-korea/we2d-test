const customError = (type) => {
  switch(type) {
    case "any.empty":
      return "필수 입력사항입니다."
    case "string.email":
      return "부적절한 이메일 형식입니다."
    case "number.base":
      return "숫자를 입력해주세요."
    default:
      return type;
  }
}

export default customError;