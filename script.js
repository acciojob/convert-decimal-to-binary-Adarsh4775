function decimalToBinary(num) {
  // your code here
	let binary = "";
	while(num > 0)
		{
			let remainder = num % 2 ;
			binary = remainder.toString() + binary;
			num = Math.floor(num/2);
		}
			if(binary === "")
			{
				return 0;
			}
			else{
				return binary;
			}
} 
  const num = parseInt(prompt("Enter a number."));
alert(decimalToBinary(num));
    
	


