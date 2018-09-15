---
title: "SPOJ.COM – Thuật toán bài NKGAURD – Bảo vệ nông trang"
date: "2016-10-12T19:59:18.083Z"
categories: ["spoj", "Tìm kiếm theo chiều sâu - DFS"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "tìm kiếm theo chiều sâu dfs"]
keywords: "Thuật toán bài NKGAURD"
---

## Đề bài:

Nông trang có rất nhiều ngọn đồi núi, để bảo vệ nông trang nông dân Thái muốn đặt người canh gác trên các ngọn đồi này. 

Anh ta băn khoăn không biết sẽ cần bao nhiêu người canh gác nếu như anh ta muốn đặt 1 người canh gác trên đỉnh của mỗi đồi. Anh ta có bản đồ của nông trang là một ma trận gồm N (1 < N <= 700) hàng và M (1 < M <= 700) cột. Mỗi phần tử của ma trận là độ cao H_ij so với mặt nước biển (0 <= H_ij <= 10,000) của ô (i, j). Hãy giúp anh ta xác định số lượng đỉnh đồi trên bản đồ. 

Đỉnh đồi là 1 hoặc nhiều ô nằm kề nhau của ma trận có cùng độ cao được bao quanh bởi cạnh của bản đồ hoặc bởi các ô có độ cao nhỏ hơn. Hai ô gọi là kề nhau nếu độ chênh lệch giữa tọa độ X không quá 1 và chênh lệch tọa độ Y không quá 1.

### Đầu vào

* Dòng 1: Hai số nguyên cách nhau bởi dấu cách: N và M 

* Dòng 2..N+1: Dòng i+1 mô tả hàng i của ma trận với M số nguyên cách nhau bởi dấu cách: H_ij

#### Đầu ra

* Dòng 1: Một số nguyên duy nhất là số lượng đỉnh đồi.

#### Ví dụ:

Đầu vào: 

8 7 

4 3 2 2 1 0 1 

3 3 3 2 1 0 1 

2 2 2 2 1 0 0 

2 1 1 1 1 0 0 

1 1 0 0 0 1 0 

0 0 0 1 1 1 0 

0 1 2 2 1 1 0 

0 1 1 1 2 1 0 

Đầu ra: 

3 

_Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://vn.spoj.com/problems/NKGUARD/](http://vn.spoj.com/problems/NKGUARD/)_

### Phân tích:

+ Theo đầu bài, đỉnh đồi là 1 hoặc nhiều ô nằm kề nhau của ma trận có cùng độ cao được bao quanh bởi cạnh của bản đồ hoặc bởi các ô có độ cao nhỏ hơn. Do đó, tôi sẽ sử dụng [thuật toán tìm kiếm theo chiều sâu DFS](/category/tim-kiem-theo-chieu-sau-dfs/) hoặc [thuật toán tìm kiếm theo chiều rộng BFS](/category/tim-kiem-theo-chieu-rong-bfs/). Cả 2 cách đều tương tự nhau (ở đây tôi chỉ trình bày code theo [thuật toán tìm kiếm theo chiều sâu DFS](/category/tim-kiem-theo-chieu-sau-dfs/)). 

+ Tiếp theo, hai ô gọi là kề nhau nếu độ chênh lệch giữa tọa độ X không quá 1 và chênh lệch tọa độ Y không quá 1\. Nghĩa là một ô sẽ có 8 ô xung quanh kề với nó.

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu.  Nên rất mong nhận được sự chia sẻ của các bạn.)

### Code C/C++:

`gist:completejavascript/8a982c4ec97cc1f55bb3e07166bb8fc1`

_Code by: Phạm Văn Lâm_