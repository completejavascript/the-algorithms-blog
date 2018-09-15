---
title: "Tổng hợp một số thuật toán cơ bản về sắp xếp - Phần 2"
date: "2016-09-23T10:42:18.083Z"
categories: ["Thuật toán cơ bản"]
tags: ["phạm văn lâm", "sắp xếp", "sorting", "thuật toán cơ bản", "thuật toán sắp xếp cơ bản"]
keywords: "sắp xếp phần 2"
---

Trước khi đọc bài này, xin mời các bạn tham khảo bài [Tổng hợp một số thuật toán cơ bản về sắp xếp – Phần 1](/tong-hop-mot-so-thuat-toan-co-ban-ve-sap-xep-phan-1). Bài này, mình sẽ giới thiệu với các bạn các thuật toán sắp xếp nhanh hơn, có thể giải quyết được những bài toán với số lượng phần tử lớn hơn.

## Thuật toán sắp xếp nhanh – Quick Sort

Tư tưởng chính của thuật toán sắp xếp này là: chọn ra một phần tử làm trung gian, phần tử có giá trị nhỏ hơn trung gian thì cho sang bên trái phần tử trung gian, phần tử có giá trị lớn hơn trung gian thì cho sang bên phải phần tử trung gian.

`gist:completejavascript/77bb42705b234ac1a0be7a08050ec302`

## Thuật toán sắp xếp trộn – Merge sort

`gist:completejavascript/f7c9bae36585cdb5735cc73e7f8eff5d`

## Thuật toán sắp xếp vun đống – Heap sort

Thuật toán xếp vun đống và thuật toán sắp xếp trộn ở trên có độ phức tạp là N.Log(N) nên chạy rất nhanh. Với thuật toán này, các phần tử trong mảng được đặt ở vị trí mô tả cây nhị phân đầy đủ. Tức là nếu chỉ số các phần tử là 0, 1, 2,… thì tại phần tử thứ i sẽ có 2 nút con của nó là tại phần tử thứ 2*i + 1 và 2*i + 2.

`gist:completejavascript/c6e40ed49a811e7fcd7e7607df433e9a`

Code by Phạm Văn Lâm