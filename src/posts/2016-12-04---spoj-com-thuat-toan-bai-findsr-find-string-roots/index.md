---
title: "SPOJ.COM – Thuật toán bài FINDSR - Find String Roots"
date: "2016-12-04T17:02:18.083Z"
categories: ["spoj", "Tham lam - Greedy"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "tham lam greedy"]
keywords: "Thuật toán bài FINDSR"
---

## Đề bài:

Trong toán học, căn bậc N của M là một số K thỏa mãn K<sup>N</sup> = M hay K*K*K...K = M, trong đó có N số K nhân với nhau. Chúng ta có thể chuyển đổi chúng sang áp dụng với xâu. Trong bài toán này, chúng ta sẽ sử dụng ghép xâu thay vì phép nhân. Do đó, căn bậc N của xâu S là một xâu T thỏa mãn T<sup>N</sup> = S, trong đó T<sup>N</sup> = T.T.T.T...T là N xâu T ghép với nhau. Ví dụ nếu xâu S là "abcabcabcabc", với N = 2 thì xâu T = "abcabc" là căn bậc N của S. Và nếu N = 4 thì xâu T = "abc". Chú ý rằng nếu N = 1 thì căn bậc N của S là chính nó. 

Cho trước một xâu S và bạn phải tìm ra số N lớn nhất mà căn bậc N của S tồn tại. Trong ví dụ trên đáp án là N = 4, bởi vì không có số nguyên N nào lớn hơn 4 mà tồn tại căn bặc N của S.

### Đầu vào:

Đầu vào bao gồm nhiều test case, mỗi cái được cho trên một dòng. Mỗi dòng không tồn tại xâu rỗng và có tối đa 10<sup>5 </sup>kí tự, và chỉ bao gồm chữ số và chữ cái thường. Dòng cuối cùng chứa một kí tự '*' (không bao gồm '').

### Đầu ra:

Với mỗi test case, in ra số nguyên duy nhất là kết quả.

### Ví dụ:

**Đầu vào:**

```
abcabcabcabc
abcdefgh012
aaaaaaaaaa
*
```

**Đầu ra:**

```
4
1
10
```

Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://www.spoj.com/problems/FINDSR/](http://www.spoj.com/problems/FINDSR/)

### Phân tích:

  * Ở đây yêu cầu là tìm ra số N lớn nhất mà tồn tại căn bậc N của S, nghĩa là độ dài mỗi xâu T phải là nhỏ nhất. Do đó, tôi sẽ xét độ dài của T từ 1 rồi tăng dần lên. Khi nào thỏa mãn thì tôi sẽ dừng lại và đó chính là kết quả cần tìm.
  
  * Sau đây, mời bạn theo dõi cách triển khai code sử dụng [thuật toán tham lam Greedy](/category/tham-lam-greedy/) của tôi.

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### Code C/C++:

`gist:completejavascript/67851232100de17c82d9cfc685c5a026`

_Code by Phạm Văn Lâm._