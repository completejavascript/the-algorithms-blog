---
title: "SPOJ.COM – Thuật toán bài FACEFRND - Friends of Friends"
date: "2016-12-03T20:10:18.083Z"
categories: ["spoj", "Tham lam - Greedy"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "tham lam greedy"]
keywords: "Thuật toán bài FACEFRND"
---

## Đề bài:

Bob dùng trang mạng xã hội hầu hết thời gian. Anh ấy đã tò mò về vấn đề bạn của bạn trên trang mạng xã hội này. Nếu như X là bạn anh ấy. Và Y là bạn của X. Mà Y không phải bạn của anh ấy. Khi đó Y được gọi là bạn của bạn. Bạn phải tìm ra xem Bob có bao nhiêu bạn của bạn. Biết các ID được dùng trên mạng xã hội là số duy nhất bao gồm 4 chữ số.

### Đầu vào:

Dòng đầu tiên là số nguyên N, 1 <= N <= 100 - là số bạn trên trang mạng xã hội của Bob. Sau đó là N dòng. Số đầu tiên của mỗi dòng là ID của bạn Bob và sau đó là số M (1 <= M <= 100) là số bạn của anh ta. Sau đó là M số nguyên là ID của những người bạn (không bao gồm Bob).

### Đầu ra:

In ra một số nguyên xác định số bạn của bạn của Bob.

### Ví dụ:

**Đầu vào:**

```
3
2334 5 1256 4323 7687 3244 5678
1256 2 2334 7687
4323 5 2334 5678 6547 9766 9543
```

**Đầu ra:**

6

Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://www.spoj.com/problems/FACEFRND/](http://www.spoj.com/problems/FACEFRND/)

### Phân tích:

  * Bài toán có vẻ khá rõ ràng. Ở đây tôi sử dụng [thuật toán tham lam Greedy](/category/tham-lam-greedy/) để giải bài toán. Tôi sẽ thực hiện đúng như trong đề bài. Đó là tìm ra những người là bạn của bạn Bob.
  
  * Vì ID là một số duy nhất có 4 chữ số nên tôi sử dụng mảng đánh dấu gồm 10000 phần tử để đánh dấu trạng thái của các ID là bạn của Bob hay không, và đã xuất hiện chưa.
  
  * Mời bạn theo dõi code sau để hiểu rõ hơn về cách triển khai của tôi.

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### Code C/C++:

`gist:completejavascript/ad1dc53e3c90ed4141e76db4a9cc3895`

_Code by Phạm Văn Lâm._