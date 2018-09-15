---
title: "SPOJ.COM – Thuật toán bài CHESSCBG - Bàn cờ thế"
date: "2016-10-20T21:11:18.083Z"
categories: ["spoj", "Tìm kiếm theo chiều rộng - BFS"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "tìm kiếm theo chiều rộng bfs"]
keywords: "Thuật toán bài CHESSCBG"
---

## Đề bài:

Một bàn cờ thế là một bảng gồm 4 dòng, 4 cột. Mỗi thế cờ là một cách sắp xếp 8 quân cờ, hai quân khác nhau ở hai ô khác nhau. Bài toán đặt ra là cho hai thế cờ 1 và 2, hãy tìm một số ít nhất bước di chuyển quân để chuyển từ thế 1 sang thế 2; một bước di chuyển quân là một lần chuyển quân cờ sang ô trống kề cạnh với ô quân cờ đang đứng.

### Đầu vào:

Từ file văn bản gồm 8 dòng, mỗi dòng là một xâu nhị phân độ dài 4 mà số 1/0 tương ứng với vị trí có hoặc không có quân cờ. Bốn dòng đầu là thế cờ 1, bốn dòng sau là thế cờ 2.

### Đầu ra:

Gồm 1 dòng duy nhất là số bước chuyển quân ít nhất.

### Ví dụ:

**Đầu vào:** 

```
1111 
0000 
1110 
0010 
1010 
0101 
1010 
0101
``` 

**Đầu ra:** 

4 

_Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://vn.spoj.com/problems/CHESSCBG/](http://vn.spoj.com/problems/CHESSCBG/)_

### Phân tích:

  * Ở đây, ma trận đầu vào tôi sẽ lưu nó dưới dạng mảng 1 chiều. Công thức để quy đổi từ tọa độ 1 điểm trên ma trận thành tọa độ 1 điểm trên mảng và ngược lại như sau: 
  
    * Từ điểm có tọa độ ```[r][c]``` trên ma trận thì tọa độ trên mảng là: **r\*N + c** (trong đó N là số cột của ma trận. Ở đây N = 4). Ví dụ: một điểm ở tọa độ ```[1][2]``` (hàng 1, cột 2) thì ở trên mảng nó sẽ tương ứng với điểm 1*4 + 2 = 6 (chỉ số tính từ 0)
    * Ngược lại, từ một điểm ở trên mảng có tọa độ là **t** thì ở trên mảng, tọa độ của nó là: **c = t % N** và **r = (t - c)/4\.** Lấy luôn ví dụ trên, với điểm trên mảng có tọa độ t = 6, thì trên mảng nó sẽ có tọa độ: c = 6 % 4 = 2 và r = (6 - 2) /4 = 1. 

  * Như vậy, thế cờ 1 và thế cờ 2 đều có thể biểu diễn được dưới dạng mảng 1 chiều gồm 16 phần tử. Ở đây, tôi sẽ sử dụng [thuật toán tìm kiếm theo chiều rộng - BFS](/category/tim-kiem-theo-chieu-rong-bfs/) với trạng thái đầu là thế cờ 1 và trạng thái đích là thế cờ 2\. Để thực hiện điều này, tôi cần phải có một mảng để lưu số bước ít nhất mà từ thế cờ 1 tới thế cờ đó.
  
  * Ở đây có một điều đặc biệt đó là các phần tử của mảng chỉ bao gồm các số 0 và 1\. Do đó, tôi hoàn toàn có thể coi nó như là một số nhị phân. Vì vậy, tôi sẽ chuyển nó thành số thập phân tương ứng để biểu diễn trạng thái đó. Với ví dụ đầu bài, thế cờ 1 là: 
  
    ```
    1111
    0000 
    1110 
    0010
    ``` 
  
  Tôi chuyển nó thành mảng: **1111.0000.1110.0010**. Dãy số này tương ứng với số: **61666\.** Đến đây là bài toán đã trở nên đơn giản hơn rồi phải không các bạn.

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### **Code C/C++:**

`gist:completejavascript/1f5ec78c593f761ac2371e858c66f105`

_Code by Phạm Văn Lâm._