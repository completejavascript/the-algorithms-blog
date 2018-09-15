---
title: "SPOJ.COM - Thuật toán bài ALLIZWEL - ALL IZZ WELL"
date: "2016-09-23T22:38:18.083Z"
categories: ["spoj", "Tìm kiếm theo chiều sâu - DFS", "Vét cạn - Brute Force"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "tìm kiếm theo chiều sâu dfs"]
keywords: "Thuật toán bài ALLIZWEL"
---

## Đề bài:

Mr.Giang luôn luôn nói "ALL IZZ WELL" mỗi khi anh ấy gặp rắc rối. Vì vậy, bạn bè và mọi người xung quanh luôn luôn cười anh ta. Tuy nhiên, Mr.Giang luôn tin vào niềm tin của mình. Anh ấy tin rằng cụm từ "ALLIZZWELL" sẽ làm mọi việc được giải quyết ổn thoả. Nhiệm vụ của bạn là tạm bỏ qua câu truyện trên và tìm ra nếu như có đường đi trên ma trận tạo thành câu "ALLIZZWELL". Biết rằng có đường đi từ một cell đến tất cả các cell kề với nó. Hai cell kề nhau nếu chúng chia sẻ cạnh hoặc góc.

### Đầu vào:

Dòng đầu tiên bao gồm một số T biểu diễn số lượng test case. Dòng đầu tiên của mỗi test case bao gồm 2 số R và C biểu diễn số dòng và số cột của ma trận. Cuối cùng là miêu tả ma trận.

### Đầu ra:

Với mỗi test case, in ra "YES" nếu như có đường đi tạo thành "ALLIZZWELL". Ngược lại in ra "NO" 

**Chú ý:** - Cẩn thận với test case số 4 - Có một dòng mới sau mỗi test case trong đầu vào 

**Ràng buộc:** 

T <= 1000 

R <= 100 

C <= 100

### Ví dụ:

**Đầu vào:** 

5 

3 6 

AWE.QX 

LLL.EO 

IZZWLL 

1 10 

ALLIZZWELL 

2 9 

A.L.Z.E.. 

.L.I.W.L. 

3 3 

AEL 

LWZ 

LIZ 

1 10 

LLEWZZILLA 

**Đầu ra:** 

YES 

YES 

NO 

NO 

YES 

_Các bạn có thể tham khảo đề bài tiếng anh và submit tại đây: [http://www.spoj.com/problems/ALLIZWEL/](http://www.spoj.com/problems/ALLIZWEL/)_

### Phân tích:

Bài toán này tương tự như bài toán [ABCPATH](/spoj-com-thuat-toan-bai-abcpath-abc-path/), tuy nhiên, đối với bài toán [ABCPATH](/spoj-com-thuat-toan-bai-abcpath-abc-path/), đường đi là các kí tự phân biệt A,B,C,...Z. Còn với bài toán này, đường đi là "ALLIZZWELL", trong đó các kí tự có thể lặp lại. Do đó, ta phải kiểm tra tất cả các đường đi có thể bắt đầu từ kí tự 'A'. Đó chính là thuật toán [tìm kiếm theo chiều sâu DFS](/category/tim-kiem-theo-chieu-sau-dfs/) và vét cạn.

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### Code C/C++:

`gist:completejavascript/4ddb51cdeae41a94b84fdc96a41f1754`

_Code by Phạm Văn Lâm_