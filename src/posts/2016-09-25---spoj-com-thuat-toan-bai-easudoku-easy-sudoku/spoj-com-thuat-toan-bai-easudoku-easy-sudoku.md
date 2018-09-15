---
title: "SPOJ.COM – Thuật toán bài EASUDOKU – Easy sudoku"
date: "2016-09-25T06:58:18.083Z"
categories: ["spoj", "Quay lui có điều kiện - Backtracking"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "quay lui có điều kiện backtracking"]
keywords: "Thuật toán bài EASUDOKU"
---

## **Đề bài:**

Bạn được yêu cầu tìm thuật toán để giải quyết bài toán sudoku cơ bản.

### **Đầu vào:**

Dòng đầu vào bao gồm số lượng test case t, 1 <= t <= 15\. Mỗi test case bao gồm 81 số từ 0 đến 9 được phân cách nhau bởi dấu cách, và 9 số trên 1 dòng. Số 0 nghĩa là số cần phải điền.

### **Đầu ra:**

Nếu không tồn tại giải pháp để giải quyết bài toán thì in ra “No solution”. Ngược lại thì bạn phải in 81 số đó ra, và phân cách nhau giống như đầu vào. 

_Các bạn có thể tham khảo đề bài tiếng anh và submit code tại: [http://www.spoj.com/problems/EASUDOKU/](http://www.spoj.com/problems/EASUDOKU/)_

### **Phân tích:**

+ Trước khi giải bài toán này, các bạn chắc đã biết về sudoku. Còn nếu các bạn chưa biết về sudoku thì sau đây mình sẽ giới thiệu qua về luật chơi, như sau: 

+ Có nhiều loại sudoku, ở đây là bài toán sudoku cơ bản. Kích thước là 9×9\. Và được chia ra làm 9 khối nhỏ hơn có kích thước 3×3\. Sudoku được giải khi tất cả các số trên ma trận đã được điền hết. 

+ Thoả mãn yêu cầu: Trên mỗi hàng, mỗi cột, và mỗi khối 3×3 nhỏ phải được điền các số từ 1 đến 9, mỗi số xuất hiện đúng 1 lần, tức là không số nào được lặp lại từ 2 lần trở lên; 

+ Qua đó, thuật toán có thể sử dụng ở đây đó là thuật toán [quay lui có điều kiện – backtracking](/category/quay-lui-co-dieu-kien-backtracking/). Nghĩa là, tại mỗi ô cần giải, ta sẽ điền thử từ 1 đến 9\. Nếu ta có thể điền hết thì đó chính là giải pháp. Ngược lại thì sẽ không có giải pháp cho bài toán.

## **Lời giải:**

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### **Code C/C++:**

`gist:completejavascript/b886cc10db36a747d23e522a4df4aa2b`

_Code by Phạm Văn Lâm_