---
title: "SPOJ.COM – Thuật toán bài GCPC11F - Diary"
date: "2016-12-04T17:31:18.083Z"
categories: ["spoj", "Tham lam - Greedy"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "tham lam greedy"]
keywords: "Thuật toán bài GCPC11F"
---

## Đề bài:

Ngày nay, con người muốn kết nối với nhau theo một cách an toàn hơn nhờ việc sử dụng thuật toán mã hóa không đối xứng, ví dụ RSA. Tuy nhiên, anh trai tôi lại sử dụng một cái khác, một phương pháp mã hóa đơn giản hơn, để viết nội dung nhật kí của anh ấy. Khoảng cách giữa kí tự gốc và kí tự được mã hóa là cố định. Nếu chúng ta định nghĩa khoảng cách này là d = 5, thì khi đó A sẽ được thay bởi F; B được thay bởi G; C được thay bởi H;... và Z được thay bởi E. 

Với việc biết trước khoảng cách d này, việc giải mã sẽ trở nên vô cùng đơn giản. Tuy nhiên anh trai tôi lại sử dụng khoảng cách này một cách ngẫu nhiên. Để giải mã tôi phải đoán khoảng cách này. Vì vậy, tôi sử dụng một dấu hiệu đó là kí tự E xuất hiện nhiều hơn các kí tự khác. Bạn có thể viết một chương trình để tính khoảng cách d dựa vào vấn đề đó là kí tự được sử dụng nhiều nhất trong chuỗi kí tự đã được mã hóa sẽ được thay thế cho kí tự E. Và dĩ nhiên là giải mã chuỗi kí tự đó.

### Đầu vào:

Bao gồm nhiều test case, số test case c thỏa mãn _1 ≤ c ≤ 100_. Mỗi test case được cho trên 1 dòng. Nội dung chỉ bao gồm các kí tự viết hoa từ A-Z, và có tối đa 1000 kí tự, bao gồm cả dấu cách.

### Đầu ra:

In ra một dòng chứa khoảng cách d nhỏ nhất có thể (_0 ≤ d ≤ 25_) và chuỗi kí tự được giải mã. Nếu không thể giải mã được do có nhiều khoảng cách thỏa mãn luật trên thì in ra "NOT POSSIBLE". Chú ý rằng kí tự cách sẽ không được mã hóa.

### Ví dụ:

**Đầu vào:**

```
4
RD TQIJW GWTYMJWX INFWD JSYWNJX ZXJ F XNRUQJ JSHWDUYNTS YJHMSNVZJ
THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG
XVIDRE TFCCVXZRKV GIFXIRDDZEX TFEKVJK UVTIPGKZFE
XVIDRE TFCCVXZRKV GIFXIRDDZEX TFEKVJK
```

**Đầu ra:**

```
5 MY OLDER BROTHERS DIARY ENTRIES USE A SIMPLE ENCRYPTION TECHNIQUE
10 JXU GKYSA RHEMD VEN ZKCFI ELUH JXU BQPO TEW
17 GERMAN COLLEGIATE PROGRAMMING CONTEST DECRYPTION
NOT POSSIBLE
```

Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://www.spoj.com/problems/GCPC11F/](http://www.spoj.com/problems/GCPC11F/)

### Phân tích:

  * Tôi sẽ sử dụng [thuật toán tham lam Greedy](/category/tham-lam-greedy/) để giải quyết bài toán này.
  
  * Để giải bài toán này, trước tiên tôi phải tìm ra kí tự nào được sử dụng nhiều nhất để tính ra khoảng cách d theo như luật trên. Có nhiều cách để tính, còn ở đây tôi sử dụng cách đơn giản nhất đó là sử dụng mảng đếm tần suất.
  
  * Việc tiếp theo là tôi sẽ đếm xem có bao nhiêu trường hợp có cùng khoảng cách d như vậy. Nếu như có hơn một trường hợp thì không thể giải mã được. + Nếu có thể giải mã được thì tôi sẽ bắt đầu giải mã.

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### Code C/C++:

`gist:completejavascript/0e295b23dfdb3aeb50a9fbd659a337ef`

_Code by Phạm Văn Lâm._