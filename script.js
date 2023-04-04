function findLargest(a, b, c) {
  //your code here
	if(a>b && a>c) return a;
	else if(b>a && b>c) return b;
	else if(c>a && c>b) return c; 
	else if(a=b>c || a=c>b) return a;
	else if(c=b>a) return c;
	else return;
}

const num1 = parseInt(prompt("Enter First Number."));
const num2 = parseInt(prompt("Enter Second Number."));
const num3 = parseInt(prompt("Enter Third Number."));
alert(findLargest(num1, num2, num3));
