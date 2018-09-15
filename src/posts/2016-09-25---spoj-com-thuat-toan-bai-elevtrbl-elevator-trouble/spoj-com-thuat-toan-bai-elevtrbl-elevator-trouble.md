---
title: "SPOJ.COM – Thuật toán bài ELEVTRBL – Elevator Trouble"
date: "2016-09-25T04:52:18.083Z"
categories: ["spoj", "Tìm kiếm theo chiều rộng - BFS"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "tìm kiếm theo chiều rộng bfs"]
keywords: "Thuật toán bài ELEVTRBL"
---

## Đề bài:

Bạn đang trên đường đi đến buổi phỏng vấn cho vị trí lập trình viên. Và thực tế, bạn đã bị muộn. Buổi phỏng vấn được diễn ra ở một tòa nhà rất cao và bạn đang ở tầng s, nơi mà bạn gặp một chiếc thang máy. Biết rằng,  thang máy sẽ có 2 nút bấm được đánh dấu là “UP u” và “DOWN d”. Bạn kết luận là nút UP sẽ đưa thang máy lên trên u tầng nếu như có đủ số tầng phía trên, và nút DOWN sẽ đưa thang máy đi xuống d tầng nếu có đủ số tầng phía dưới. Trường hợp không có đủ số tầng thì thang máy sẽ không lên hoặc không xuống. Biết rằng buổi phỏng vấn được diễn ra tại tầng g, và tòa nhà này có f tầng. Bạn hãy nghĩ ra thuật toán và lập trình để tính ra số lần phải bấm nút là ít nhất để đi được đến đúng vị trí tầng phỏng vấn. Nếu không thể đển được đúng tầng thì in ra dòng chữ “use the stairs”. 

Cho số f, s, g, u và d (lần lượt là số lượng tầng tại tòa nhà, tầng bắt đầu, tầng đích, số tầng lên và số tầng xuống). Tìm ra số lần phải bấm nút ít nhất để đi được từ tầng s đến tầng g và in ra số đó hoặc trong trường hợp không thể đi được thì in ra “use the stairs”.

### Đầu vào:

Đầu vào bao gồm một dòng, chứa các số f s g u d, trong đó 1 <= s, g <= f <= 1000000 và 0 <= u, d <= 1000000\. Các tầng được đánh số từ 1\. Ví dụ có 10 tầng thì các tầng sẽ là 1, 2, 3,…,10.

### Đầu ra:

In ra số lần phải bấm nút là ít nhất để đi được từ tầng s đến tầng g. Trường hợp không thể đi được thì in ra dòng chữ “use the stairs”.

### Ví dụ 1:

**Đầu vào:** 

10 1 10 2 1 

**Đầu ra:** 

6

### Ví dụ 2:

**Đầu vào:** 

100 2 1 1 0 

**Đầu ra:** 

use the stairs 

_Các bạn có thể tham khảo link gốc đề bài tiếng anh và submit code tại đây: [http://www.spoj.com/problems/ELEVTRBL/](http://www.spoj.com/problems/ELEVTRBL/)_

### Phân tích:

+ Bài toán này ta khó có thể sử dụng thuật toán vét cạn, hay quay lui có điều kiện vì số lượng tầng ở đây có thể lên đến N = 1000000\. Như vậy, chắc chắn sẽ bị time limit. + Ta sẽ sử dụng thuật toán [tìm kiếm theo chiều rộng – BFS](/category/tim-kiem-theo-chieu-rong-bfs/). Tư tưởng ở đây là ta sẽ đi tính số lần bấm nút nhỏ nhất để đi được hết tất cả các tầng.

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán và lập trình trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### Code C/C++:

`gist:completejavascript/0b9e655cb7fc433a9254db3c8f5cf431`

_Code by Phạm Văn Lâm._