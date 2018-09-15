---
title: "SPOJ.COM - Thuật toán bài PT07Y - Is it a tree"
date: "2016-09-23T22:52:18.083Z"
categories: ["spoj", "Tìm kiếm theo chiều sâu - DFS", "Đồ thị và cây - Graph and Tree"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "tìm kiếm theo chiều sâu dfs", "đồ thị và cây graph and tree"]
keywords: "Thuật toán bài PT07Y"
---

## Đề bài:

Bạn được cho một đồ thị không trọng số, và vô hướng. Viết chương trình để kiểm tra xem nó có phải là cây hay không.

### Đầu vào:

Dòng đầu tiên của đầu vào sẽ bao gồm 2 số nguyên N và M, tương ứng là số lượng các điểm và số lượng cạnh trên đồ thị, với 0 < N <= 10000, 0 <= M <= 20000\. Tiếp theo là M dòng chứa thông tin M cạnh của đồ thị. Mỗi dòng bao gồm một cặp u,v, nghĩa là có 1 cạnh giữa 2 điểm u, v với 1 <= u,v <= N.

### Đầu ra:

In ra "YES" nếu như đồ thị đó là cây, ngược lại in ra "NO".

### Ví dụ:

**Đầu vào:** 

3 2 

1 2 

2 3 

**Đầu ra:** 

YES 

_Các bạn có thể tham khảo đề bài tiếng anh và submit code tại: [http://www.spoj.com/problems/PT07Y/](http://www.spoj.com/problems/PT07Y/)_

### Phân tích:

+ Trước tiên, để giải được bài toán này, bạn phải hiểu thế nào là cây. Theo tôi hiểu một cách đơn giản là: cây là một đồ thị liên thông, và không có chu trình nào. Do đó, nếu cây có N đỉnh thì sẽ có đúng N-1 cạnh. + Ta sẽ dùng thuật toán [tìm kiếm theo chiều sâu DFS](/category/tim-kiem-theo-chieu-sau-dfs/) để duyệt đồ thị.

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### Code C/C++:

`gist:completejavascript/4f45ac9af472abc52c9111a09704edc7`

_Code by Phạm Văn Lâm_