---
title: "SPOJ.COM – Thuật toán bài HOUSES - Những ngôi nhà"
date: "2016-10-13T22:16:18.083Z"
categories: ["spoj", "Quay lui có điều kiện - Backtracking"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "quay lui có điều kiện backtracking"]
keywords: "Thuật toán bài HOUSES"
---

## Đề bài:

Một công ty đầu tư xây dựng một khu nhà gồm L căn nhà nằm cạnh nhau trên một con đường. Có N người muốn mua nhà ở khu nhà này, biết rằng người thứ i muốn mua a<sub>i</sub> căn nhà và mỗi người đều muốn mua những căn nhà nằm cạnh nhau. Do số căn nhà cần mua có thể nhỏ hơn tổng số căn nhà (L) nên sẽ có một số căn nhà chưa được bán. Để đảm bảo mỹ quan của khu nhà, công ty sẽ luôn luôn bán căn nhà đầu tiên (theo thứ tự từ trái sang phải). 

Biết yêu cầu của những người mua, một cách bán những căn nhà của công ty có thể được biểu diễn bằng 1 dãy gồm L số. Trong đó số thứ i bằng 0 nếu căn nhà thứ i chưa được bán và bằng k nếu căn nhà thứ i được bán cho người thứ k. 

Ví dụ: khi L=4, N=2, a<sub>1</sub> = 2, a<sub>2</sub>=1, dãy “2 0 1 1” thể hiện một cách bán những căn nhà của công ty: căn nhà đầu tiên bán cho người thứ 2, căn nhà thứ 3 và thứ 4 bán cho người đầu tiên và căn nhà thứ 2 được để lại. 

Yêu cầu: Hãy giúp công ty liệt kê các cách bán những căn nhà. Các cách bán căn nhà được liệt kê theo thứ tự từ điển của dãy số biểu diễn. Nếu số cách bán căn nhà lớn hơn 1000, chỉ cần liệt kê 1000 cách đầu tiên. (Biết rằng dãy a có thứ tự từ điển đứng trước dãy b nếu và chỉ nếu tồn tại chỉ số j, sao cho a<sub>i</sub> = b<sub>i</sub> với mọi i < j và a<sub>j</sub> < b<sub>j</sub>).

### Đầu vào

*   Dòng đầu tiên: chứa 2 số nguyên L, N.
*   Dòng thứ 2 chứa N số nguyên, tương ứng là các giá trị a<sub>1</sub>, a<sub>2</sub>, …, a<sub>n</sub>.

### Giới hạn

*   1 ≤ L ≤ 100.
*   1 ≤ N ≤ 20.
*   a<sub>1</sub> + a<sub>2</sub> + ... + a<sub>N</sub> ≤ L.

#### Đầu ra

Gồm nhiều dòng, mỗi dòng tương ứng với dãy số biểu diễn một cách bán những căn nhà của công ty, 2 số liên tiếp của dãy số được cách nhau bởi một khoảng trắng. Các dãy số được liệt kê theo thứ tự từ điển.

#### Ví dụ

**Đầu vào:** 

4 2 

2 1 

**Đầu ra:** 

1 1 0 2 

1 1 2 0 

2 0 1 1 

2 1 1 0 

_Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://vn.spoj.com/problems/HOUSES/](http://vn.spoj.com/problems/HOUSES/)_

### Phân tích:

+ Trong bài toán này tôi sẽ sử dụng thuật toán quay lui có điều kiện - backtracking. Tư tưởng là lần lượt xét từng căn nhà. Tại mỗi căn nhà, tôi sẽ xét 2 khả năng có thể là nó được bán hoặc không được bán. 

+ Trong trường hợp căn nhà được bán, tôi lại lần lượt xét các trường hợp là nó được bán cho người thứ 1, 2, 3,..., i,..N. Và bạn cần nhớ rằng, mỗi khi nhà được bán cho người thứ i thì đồng nghĩa với a<sub>i</sub> căn nhà sẽ được bán cho người thứ i. 

+ Trong trường hợp căn nhà không được bán, điều này chỉ xảy ra khi số căn nhà còn lại đủ cho những người còn lại. Vì bắt buộc phải bán nhà cho N người. 

+ Sau đây là lời giải bài toán sử dụng [thuật toán quay lui có điều kiện - backtracking.](/category/quay-lui-co-dieu-kien-backtracking/)

## Lời giải

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu.  Nên rất mong nhận được sự chia sẻ của các bạn.)

### Code C/C++:

`gist:completejavascript/4672b29bb59d43020d3153291400fe2a`

_Code by Phạm Văn Lâm._