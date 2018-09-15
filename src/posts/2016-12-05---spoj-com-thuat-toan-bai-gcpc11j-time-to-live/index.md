---
title: "SPOJ.COM – Thuật toán bài GCPC11J - Time to live"
date: "2016-12-05T22:23:18.083Z"
categories: ["spoj", "Tìm kiếm theo chiều rộng - BFS"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "tìm kiếm theo chiều rộng bfs"]
keywords: "Thuật toán bài GCPC11F"
---

## Đề bài:

Như bạn đã biết, hầu hết mạng máy tính được tổ chức dạng cây, tức là mỗi máy tính sẽ có thể kết nối với một và chỉ một máy tính khác. Có một khái niệm đó là Time to Live (TTL) được xác định là sau bao nhiêu bước một gói tin trong mạng bị mất nếu như nó không thể tới đúng đích. Mục đích của TTL là để tránh trường hợp gói tin lan truyền vòng tròn trong mạng dẫn đến lỗi. 

Điểm đặt của bộ định tuyến (router) cái kết nối mạng với mạng khác là tối ưu khi mà giá trị lớn nhất cần có của TTL để gói tin được gửi từ router này sang bất kì router khác trong cùng một mạng là nhỏ nhất. 

Cho trước thông tin của mạng. Bạn hãy tính giá trị lớn nhất cần phải có của TTL ở mạng này nếu như bạn có thể chọn một máy tính làm vai trò của router.

### Đầu vào:

Dòng đầu tiên của đầu vào bao gồm số c, với _1 ≤ c ≤ 100_, là số lượng test case. Mỗi test case bắt đầu với một dòng chứa số N, là số lượng máy tính trong mạng _1 < N ≤ 10<sup>5</sup>_. Máy tính được đánh số từ 0 đến N - 1\. Sau đó là N - 1 dòng, xác định kết nối giữa 2 máy tính, gồm 2 số a và b. Có nghĩa là máy tính a kết nối với máy tính b và ngược lại, _0 ≤ a,b < N_.

### Đầu ra:

Với mỗi test case, in ra một dòng chứa giá trị tối ưu nhất của TTL.

### Ví dụ:

**Đầu vào:**

```
3
2
1 0
5
3 2
2 1
0 2
2 4
9
3 1
6 5
3 4
0 3
8 1
1 7
1 6
2 3
```

**Đầu ra:** 

```
1
1
2
```

Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://www.spoj.com/problems/GCPC11J/](http://www.spoj.com/problems/GCPC11J/)

### Phân tích:

  * Bài này thực chất là tôi phải đi tìm khoảng cách lớn nhất của 2 điểm trên cây. Tôi sẽ sử dụng 2 lần [thuật toán tìm kiếm theo chiều rộng BFS](/category/tim-kiem-theo-chieu-rong-bfs/) để tìm ra khoảng cách này. Lần thứ nhất tôi bắt đầu từ điểm bất kì và tìm ra điểm xa nhất so với điểm bắt đầu này. Sau khi tìm được điểm xa nhất trong lần thứ nhất, tôi sẽ tiếp tục áp dụng BFS lần thứ 2 từ điểm vừa mới tìm được. Và tôi lại tìm được điểm xa nhất so với điểm bắt đầu lần thứ 2\. Lúc này tôi tìm được khoảng cách xa nhất giữa 2 điểm trên cây. Giả sử là x.
  
  * Lúc này, nếu x chẵn thì giá trị TTL = x / 2\. Còn nếu x lẻ thì TTL = x / 2 + 1.
  
  * Một điểm chú ý ở đây là số điểm N khá lớn. Do đó tôi sẽ sử dụng danh sách liên kết để xác định liên kết giữa các điểm.

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### Code C/C++:

`gist:completejavascript/7c0408471d02c4fd63002513dcd99e1b`

_Code by Phạm Văn Lâm._