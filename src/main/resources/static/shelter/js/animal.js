

var url = window.location.href;
id =28
var newUrl = url + `?=${id}`;
const tbody = document.querySelector('#tbody');
const animalDate = document.querySelector('#animalDate');
const animalName = document.querySelector('#animalName');
const animalType = document.querySelector('#animalType');
const animalCate = document.querySelector('#animalCategory');
const animalNumber = document.querySelector('#animalNumber');
const animalGender = document.querySelector('#animalGender');
const animalAge = document.querySelector('#animalAge');
const animalColor = document.querySelector('#animalColor');
const animalP1 = document.querySelector('#animalPhoto1');
const animalP2 = document.querySelector('#animalPhoto2');
const animalP3 = document.querySelector('#animalPhoto3');
const animalP4 = document.querySelector('#animalPhoto4');
const animalDes = document.querySelector('#animalDes');
fetch(`animalfindbyid/${id}`, {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: {

	}
})
	.then(resp => resp.json())
	.then(ShelterAnimal => {
		console.log(ShelterAnimal)
		console.log(animalP1.src)
		 const animal = ShelterAnimal; 

		animalDate.textContent = animal.animalDate;
		animalName.textContent = animal.animalName;
		animalType.textContent = animal.animalType;
		animalCate.textContent = animal.animalCategory;
		animalNumber.textContent = animal.animalNumber;
		animalGender.textContent = animal.animalGender;
		animalAge.textContent = animal.animalAge;
		animalColor.textContent = animal.animalColor;
		animalDes.textContent = animal.animalDescribe;
		animalP1.src = animalP1.src + animal.animalPhoto1;
		animalP2.src = animalP2.src + animal.animalPhoto2;
		animalP3.src = animalP3.src + animal.animalPhoto3;
		animalP4.src = animalP4.src + animal.animalPhoto1;
		
	
	})



//function editItem(animalId) {
//	// 构建目标页面的URL
//	const url = `/animal/${animalId}`;
//
//	// 导航到目标页面
//	window.location.href = url;
//}