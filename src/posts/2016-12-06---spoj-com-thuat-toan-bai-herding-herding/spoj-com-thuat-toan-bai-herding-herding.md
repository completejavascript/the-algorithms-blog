---
title: "SPOJ.COM – Thuật toán bài HERDING - Herding"
date: "2016-12-05T20:40:18.083Z"
categories: ["spoj", "Tìm kiếm theo chiều sâu - DFS"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "tìm kiếm theo chiều sâu dfs"]
keywords: "Thuật toán bài HERDING"
---

## Đề bài:

Có một lượng mèo bị lạc trong thành phố. Và bạn được giao nhiệm vụ để tìm lại được hết số mèo. Đây là cơ hội lý tưởng cho bạn để kiểm nghiệm phát minh mới nhất của bạn. Một cái bẫy mèo đảm bảo sẽ bắt được những chú mèo khi nó đi vào khu vực của thành phố. 

May mắn thay, bạn được trợ giúp bởi một trong những nhà tâm lý học hàng đầu về mèo - người có khả năng kì diệu về tài tiên đoán. Cho trước một vùng hình vuông trong thành phố, và chính xác 4 hướng con mèo sẽ đi (đông, tây, nam, bắc). Trong khi những thông tin này là trong tầm tay, bạn vẫn không thể biết được những nơi mà hiện tại con mèo đang ở. 

Để chứng minh tính hiệu quả về giá của phương pháp này, và dĩ nhiên là tối thiểu hoá những cái bẫy sẽ được sử dụng.

### Đầu vào:

Bắt đầu là một dòng gồm 2 số n và m, cách nhau bởi dấu cách,1 ≤ n, m ≤ 1000\. Khu vực sẽ có kích thước nxm. n dòng tiếp theo, mỗi dòng có m kí tự, gồm 4 loại 'N', 'E', 'S', và 'W' biểu diễn hướng Bắc, Đông, Nam, Tây. Kí tự đầu tiên của dòng đầu tiên sẽ là điểm trên cùng bên trái. Hướng trên mỗi ô vuông sẽ là hướng con mèo sẽ đi, nếu con mèo ở ô đó. Đảm bảo rằng con mèo sẽ không ra khỏi thành phố.

### Đầu ra:

In ra số lượng bẫy tối thiểu.

### Ví dụ:

**Đầu vào:**

```
3 4
SWWW
SEWN
EEEN
```

**Đầu ra:**

2

Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://www.spoj.com/problems/HERDING/](http://www.spoj.com/problems/HERDING/)

### Phân tích:

  * Tôi nhận thấy rằng là khi con mèo đi vào thành phố, cách nó đi chính là hướng được ghi tại ô vuông nó đang đứng. Tức là hướng đã xác định trước. Do đó, để tìm được số lượng bẫy tối thiểu thì tôi phải đặt bẫy làm sao mà nó ở đúng vị trí mà chắc chắn con mèo sẽ phải đi qua đó. 
  
  * Do đó, tôi sẽ sử dụng [thuật toán tìm kiếm theo chiều sâu DFS](/category/tim-kiem-theo-chieu-sau-dfs/) để xác định các đường đi đó. Mỗi đường đi tôi chỉ cần đặt một cái bẫy là đủ để có thể bắt được hết số mèo. 
  
  * Xin mời bạn theo dõi code của tôi phía dưới đây và cùng tìm hiểu xem thế nào nhé.

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### Code C/C++:

`gist:completejavascript/41a0c234e4aec3386bff99e51580078b`

_Code by Phạm Văn Lâm_