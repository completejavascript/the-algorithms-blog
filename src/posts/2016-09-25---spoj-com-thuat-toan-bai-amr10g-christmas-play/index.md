---
title: "SPOJ.COM – Thuật toán bài AMR10G – Christmas Play"
date: "2016-09-25T21:00:18.083Z"
categories: ["spoj", "Tham lam - Greedy"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "tham lam greedy"]
keywords: "Thuật toán bài AMR10G"
---

## **Đề bài:**

Lớp mẫu giáo của con tôi đang chuẩn bị một vở kịch cho Noel (hy vọng rằng con trai tôi sẽ giữ vai trò đội trưởng). Những đứa trẻ rất là hào hứng, tuy nhiên giáo viên của chúng thì lại rất vất vả. Cô ấy phải chuẩn bị phục trang cho K người lính. Cô ấy muốn mua tất cả trang phục với cùng 1 kích cỡ. Độ dài của chúng có thể thay đổi một lượng nhỏ sau này bởi cha mẹ của những đứa trẻ. Vì vậy, cô ấy đã lấy chiều cao của tất cả những đứa trẻ. Bạn hãy giúp cô ấy chọn ra K đứa trẻ trong N đứa để đóng vai binh lính, sao cho chiều cao giữa đứa cao nhất và đứa thấp nhất là nhỏ nhất, nhờ đó mà sự thay đổi là ít nhất. Và nói với cô ấy sự chênh lệnh nhỏ nhất đó.

## **Đầu vào:**

Dòng đầu tiên bao gồm số lượng test case T. Mỗi test case bao gồm 2 dòng. Dòng đầu tiên của mỗi test case bao gồm 2 số nguyên N và K. Dòng thứ hai bao gồm N số nguyên là chiều cao của N đứa trẻ.

## **Đầu ra:**

Với mỗi test case, in ra kết quả tương ứng. 

**Ràng buộc:** 

T <= 30 

1 <= K <= N <= 20000 

1 <= chiều cao <= 1000000000

## **Ví dụ**

**Đầu vào:** 

3 

3 1 

2 5 4 

3 2 

5 2 4 

3 3 

2 5 4 

**Đầu ra:** 

0 

1 

3 

**Giải thích:** 

+ Test case số 1: giáo viên chỉ cần chọn 1 người làm binh lính, vì vậy, cô ấy có thể chọn bất kì ai làm binh lính. Do đó, độ chênh lệnh chiều cao cần tìm là 0 

+ Test case số 2: giáo viên có thể chọn hai đứa trẻ có chiều cao là 4 và 5\. Khi đó kết quả là 1 

+ Test case số 3: giáo viên bắt buộc phải chọn hết, nên đáp án là 5 – 2 = 3 

_Các bạn có thể tham khảo đề bài tiếng anh và submit tại đây: [http://www.spoj.com/problems/AMR10G/](http://www.spoj.com/problems/AMR10G/)_

## **Phân tích:**

+ Đầu tiên, nếu phải chọn 1 đứa trẻ thì kết quả là 0 

+ Nếu phải trọn K > 1 đứa trẻ, ta sẽ sắp xếp dãy chiều cao của chúng theo thứ tự tăng dần, hoặc giảm dần Sau đó, ta chỉ cần kiểm tra độ chênh lệnh chiều cao giữa đứa trẻ thứ i và i + K – 1\. Tìm ra trường hợp nào có độ chênh lệnh nhỏ nhất là kết quả cần tìm

# **Lời giải:**

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

## **Code C/C++:**

`gist:completejavascript/03f886184d032ea5f1985e06579eb40d`

_Code by Phạm Văn Lâm_