// slide đầu tiên là 1
var slideIndex = 1;
showSlides(slideIndex);
//hàm chạy next,prev
function plusSlides(n) {
	showSlides(slideIndex += n);
}
//hàm chạy button
function currentSlide(n) {
	showSlides(slideIndex = n);
}
// hàm xử lí showslides
function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("slide");
	var nutbams = document.getElementsByClassName("nutbam");
	// so sánh điều kiện
	if (n > slides.length) {
		slideIndex = 1;
	} // nếu slide < 1 thì quay trở lại 4
	if (n < 1) {
		slideIndex = slides.length;
	} 
	// dùng for ẩn slide 
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < nutbams.length; i++) {
		nutbams[i].className = nutbams[i].className.replace(" active", "");
	} //
	slides[slideIndex - 1].style.display = "block"; // hiển thị hình ảnh theo dang block
	nutbams[slideIndex - 1].className += " active"; // heightlight các button, tại 1 thời điểm có class là active
	//slideIndex - 1 phần tử của array  thường thì array bắt đầu bằng 0 nên lideIndex - 1
}