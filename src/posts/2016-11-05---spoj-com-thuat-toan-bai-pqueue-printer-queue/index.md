---
title: "SPOJ.COM – Thuật toán bài PQUEUE - Printer Queue"
date: "2016-11-05T21:38:18.083Z"
categories: ["spoj", "Tham lam - Greedy"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "tham lam greedy"]
keywords: "Thuật toán bài PQUEUE"
---

## Đề bài:

Chỉ có một cái máy in duy nhất và nó đang phải làm việc rất nhiều. Thỉnh thoảng có hàng trăm công việc ở hàng đợi của máy in. Và bạn phải đợi hàng giờ đồng hồ chỉ để in một trang giấy. 

Bởi vì một số công việc là quan trọng hơn những cái khác, nên Hacker General đã phát minh ra một hệ thống hàng đợi ưu tiên cho máy in. Bây giờ, mỗi công việc sẽ được gán một giá trị độ ưu tiên từ 1 đến 9\. Trong đó, 9 là độ ưu tiên cao nhất và 1 là độ ưu tiên thấp nhất. Máy in làm việc theo nguyên lý sau: 

  * Công việc j đầu tiên được lấy từ hàng đợi
  * Nếu có công việc nào mà độ ưu tiên cao hơn công việc j thì cho j xuống cuối của hàng đợi và không in nó.
  * Ngược lại, in công việc j (không cho nó xuống cuối cùng của hàng đợi) 
  
Theo cách này, công việc in trở nên rất nhanh. Dĩ nhiên, sẽ có những cái phải chờ đợi để được in. Nhưng đó chính là cuộc sống. 

Vấn đề của bạn với chính sách mới này là rất khó để xác định xem khi nào thì công việc của bạn được in. Bạn quyết định viết một chương trình để xác định nó. Chương trình này được đưa cho trạng thái hiện tại của hàng đợi (danh sách của thứ tự ưu tiên), cũng như là vị trí công việc của bạn. Bạn phải tính được khi nào thì công việc của bạn được hoàn thành. Giả sử rằng sẽ không có công việc nào nữa được cho vào máy in. Để cho đơn giản, giả sử việc in một công việc mất 1 phút để hoàn thành. Việc cho vào hay lấy ra từ hàng đợi xảy ra tức thời.

### Đầu vào:

Dòng đầu tiên là số nguyên t, t <= 100, là số lượng test case. Mỗi test case sẽ bao gồm 2 số nguyên n và m. Trong đó, n là số lượng công việc và m là vị trí công việc của bạn (1 ≤ _n_ ≤ 100, 0 ≤ m ≤ n-1). Vị trí công việc đầu tiên là 0, công việc thứ 2 là 1,... Dòng tiếp theo là n số nguyên, thuộc từ 1 đến 9, cho biết độ ưu tiên của các công việc. Số đầu tiên là độ ưu tiên của công việc thứ nhất, số tiếp theo là độ ưu tiên của công việc thứ 2,...

### Đầu ra:

Với mỗi một test case, in ra trên 1 dòng, chứa 1 số là số phút cần phải đợi cho đến khi công việc của bạn được hoàn thành. Giả sử không có công việc nào được thêm vào máy in.

### Ví dụ:

**Đầu vào:**

```
3
1 0
5
4 2
1 2 3 4
6 0
1 1 9 1 1 1
```

**Đầu ra:**

```
1
2
5
```

_Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://www.spoj.com/problems/PQUEUE/](http://www.spoj.com/problems/PQUEUE/)_

### Phân tích:

  * Bài toán này hoàn toàn là việc sử dụng hàng đợi. Nên có thể xếp vào loạt bài sử dụng [thuật toán tham lam Greedy](/category/tham-lam-greedy/).
  
  * Một chú ý ở đây là: để đánh dấu vị trí công việc cần tìm thì tôi sẽ chuyển giá trị của nó về âm. Nghĩa là nếu công việc cần tính có độ ưu tiên là 6, thì tôi sẽ chuyển nó về -6\. Như vậy, nếu muốn so sánh độ ưu tiên thì tôi chỉ cần so sánh giá trị tuyệt đối của chúng.

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### Code C/C++:

`gist:completejavascript/cbb115375250902b934cac750c5cc7a0`

_Code by Phạm Văn Lâm._