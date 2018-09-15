---
title: "SPOJ.COM – Thuật toán bài AGGRCOW – Aggressive cows"
date: "2016-09-25T20:11:18.083Z"
categories: ["spoj", "Chia để trị - Divide and Conquer"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "chia để trị divide and conquer"]
keywords: "Thuật toán bài AGGRCOW"
---

## **Đề bài:**

Trung đã xây dựng một cái chuồng mới rất dài, với N (2 <= N <= 100000) ngăn. Các ngăn được xếp theo một đường thẳng tại vị trí x1, x2,…, xN (0 <= xi <= 1000000000). Trung nuôi C con bò (2 <= C <= N). Và chúng không thích cách bố trí của cái chuồng này. Do đó, chúng luôn gây sự với những con bò mới khi nó được đặt vào một ngăn nào đó. Để ngăn cho những con bò này đánh nhau, Trung muốn đưa các con bò vào chuồng sao cho, khoảng cách ngắn nhất giữa hai con bất kì là lớn nhất có thể. Hỏi khoảng cách này là bao nhiêu?

### **Đầu vào:**

t – số lượng test cases, sau đó là t test cases theo sau. 

* Dòng 1: Bao gồm 2 số nguyên ngăn cách bởi dấu cách: N và C 

* Dòng 2…N+1: Dòng i + 1 chứa số nguyên xi là vị trí của chuồng thứ i.

### **Đầu ra:**

Với mỗi test case, in ra một số nguyên – là khoảng cách cần tìm.

### **Ví dụ:**

**Đầu vào:** 

1 

5 3 

1 

2 

8 

4 

9 

**Đầu ra:** 

3 

**Giải thích:** Trung có thể đặt 3 con bò vào các vị trí 1, 4 và 8\. Do đó kết quả là 3 

_Các bạn có thể tham khảo đề bài tiếng anh và submit tại đây: [http://www.spoj.com/problems/AGGRCOW/](http://www.spoj.com/problems/AGGRCOW/)_

### **Phân tích:**

+ Với bài toán này, ta sẽ sắp xếp lại mảng vị trí các ngăn sao cho toạ độ tăng dần. + Sau đó dùng thuật toán [chia để trị - Divide and Conquer](/category/chia-de-tri-divide-and-conquer/), để tìm ra kết quả. + Chú ý: khoảng cách ngắn nhất giữa hai ngăn tối thiểu là 1, và tối đa là khoảng cách giữa ngăn đầu và ngăn cuối.

## **Lời giải:**

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### **Code C/C++:**

`gist:completejavascript/fe6083187ecf20397f8385d1b9025d67`

_Code by Phạm Văn Lâm_