// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// 드래깅 상태를 추적하는 변수
let isDragging = false;

document.querySelectorAll('.gallery-item img').forEach(item => {
    // 드래그 시작을 감지
    item.addEventListener('mousedown', function() {
        isDragging = false;
    });

    // 드래깅 상태로 변경
    item.addEventListener('mousemove', function() {
        isDragging = true;
    });

    // 클릭만 모달을 열도록 조건 추가
    item.addEventListener('click', function() {
        if (!isDragging) {  // 드래그 중이 아닌 경우에만 모달 열림
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
        isDragging = false;  // 초기화
    });
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
};
