'use strict';
module.exports = (arr) => {
	var ourArray = [];
	var max = 0;

	arr.map(x =>{
		if(x > max){
			max = x;
			ourArray.push(x);
		}
	})
	return ourArray;
	
};
