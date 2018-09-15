---
title: "SPOJ.COM – Thuật toán bài VMSUBSTR - Vườn cây của ba"
date: "2016-12-05T20:58:18.083Z"
categories: ["spoj", "Tham lam - Greedy"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "tham lam greedy"]
keywords: "Thuật toán bài VMSUBSTR"
---

## Đề bài:

Sau một năm học cày cuốc vất vả; Hè này Huy quyết định mời các bạn về quê chơi. Huy sẽ dẫn các bạn đi leo núi, ngắm cảnh... và sẽ mở một buổi chiêu đãi các bạn tài nhà mình. "Nhà rộng và đẹp lắm, có cả một vườn cây ăn trái sum xuê !" - Huy giới thiệu về ngôi nhà của mình. 

Sau khi kì kèo với ba, Huy đã xin được hái trái trong vườn đãi các bạn. Nhưng với một điều kiện: Huy chỉ được hái trái những LOẠI cây mà ba qui định. Vườn cây chia thành L khu đất liên tiếp nằm thẳng hàng (được đánh số thứ tự từ 1 đến L từ đầu vườn đến cuối vườn), mỗi khu chỉ trồng duy nhất một cây. Nhà Huy có rất nhiều nhân công, mỗi nhân công sẽ chấp nhận làm việc trên những khu đất liên tiếp. 

Vì muốn đãi các bạn thật nhiều trái cây, nên Huy sẽ tận dụng hái hết TẤT CẢ những cây được ba cho phép. Nhưng mắc nỗi phải dẫn các bạn đi chơi ròi, nên không có thời gian hái trái cây. Nên Huy sẽ nhờ đến các nhân công. 

Bạn tính xem Huy sẽ phân công ít nhất bao nhiêu nhân công để thực hiện kế hoạch chiêu đãi trái cây của mình? Biết rằng mỗi nhân công sẽ hái hết tất cả trái cây ở các khu đất mình được phân vào.

### Đầu vào:

Dòng 1: Gồm 1 số nguyên dương duy nhất: L - số khu đất trong khu vườn. 

Dòng 2: Chứa xâu S gồm đúng L chữ cái Latin (in thường hoặc hoa), miêu tả khu vườn của Huy. Mỗi chữ cái cho biết loại cây được trồng ở khu đất tương ứng 

Dòng 3: Q - số trường hợp mà bạn phải xứ lý. 

Q dòng tiếp, mỗi dòng mô tả một trường hợp và gồm các chữ cái Latin (in thường hoặc hoa). Mỗi chữ đại diện cho một loại cây được phép sử dụng.

### Đầu ra:

Với mỗi trường hợp, ghi ra 1 dòng duy nhất là số nhân công ít nhất cần nhờ đến.

### Giới hạn:

L ≤ 1,000,000; 

Q ≤ 100,000; 

Số ký tự trong mỗi query không quá 52\. 

Trong mỗi query, các ký tự không lặp lại Trong 50% số test, L ≤ 1000, Q ≤ 1000;

### Ví dụ:

**Đầu vào:**

```
7
abacaba
3
ac
b
ab
```

**Đầu ra:**

```
3
2
2
```

### Giải thích:

  * Với trường hợp 'ac', Huy chỉ hái những cây loại 'a' và 'c'. Nên Huy cần nhờ ít nhất 3 nhân công lo 3 phần 'a', 'aca', 'a';
  
  * Với trường hợp 'b', Huy cần nhờ ít nhất 2 nhân công lo 2 phần 'b';
  
  * Với trường hợp 'ab', Huy cần nhờ ít nhất 2 nhân công lo 2 phần 'aba'; 
  
Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://vn.spoj.com/problems/VMSUBSTR/](http://vn.spoj.com/problems/VMSUBSTR/)

### Phân tích:

  * Tôi sẽ sử dụng [thuật toán tham lam Greedy](/category/tham-lam-greedy/) để giải quyết bài toán.
  
  * Trước tiên, tôi sẽ dùng một mảng đếm, mục đích là để đánh dấu xem trong các loại quả thì quả nào được phép hái. Sau khi đã có mảng đánh dấu rồi thì tôi sẽ duyệt mảng, để tìm ra các cụm mà chỉ có những phần tử thuộc tập cho phép liền nhau. Đó chính là kết quả 
  
  * Xin mời bạn theo dõi cách triển khai của tôi sau đây.

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### Code C/C++:

`gist:completejavascript/7bee9e865dc1bb2d254a45d400a0882a`

_Code by Phạm Văn Lâm._