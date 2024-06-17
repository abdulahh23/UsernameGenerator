let fullName = prompt ("Enter your fullname without spaces here:");
let userName = `@${fullName}${fullName.length}`;
userName = userName.toLowerCase();
alert(`Your Username is: ${userName}`);