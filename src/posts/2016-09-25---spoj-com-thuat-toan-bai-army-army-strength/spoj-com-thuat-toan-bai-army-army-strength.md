---
title: "SPOJ.COM – Thuật toán bài ARMY – Army Strength"
date: "2016-09-25T20:49:18.083Z"
categories: ["spoj", "Tham lam - Greedy"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "tham lam greedy"]
keywords: "Thuật toán bài ARMY"
---

## **Đề bài:**

Đợt tấn công tiếp theo của MechaGodzilla đang trên đường đến trái đất. Và một lần nữa, trái đất sẽ phải chiến đấu với MechaGodzilla. Đội quân của MechaGodzilla bao gồm nhiều quái vật nguy hiểm, ví dụ như Space Godzilla, King Gidorah, và MechaGodzilla. Để ngăn chặn chúng, và bảo vệ trái đất, Godzilla và bạn cô ấy đang chuẩn bị cho trận chiến. 

**Vấn đề đặt ra:** 

Mỗi đội quân bao gồm nhiều loại quái vật khác nhau. Mỗi quái vật có sức mạnh được biểu diễn bởi một số nguyên dương. Số càng lớn thì quái vật càng mạnh. Cuộc chiến sẽ bao gồm nhiều trận nhỏ. Mỗi trận, tất cả những con quái vật yếu nhất sẽ bị giết. 

Nếu có một vài quái vật yếu nhất, nhưng chúng ở cùng một đội thì một trong số chúng sẽ bị giết ngẫu nhiên. Nếu cả 2 đội quân đều có ít nhất một con quái yếu nhất thì con quái vật ở đội của MechaGodzilla sẽ bị giết. Cuộc chiến kết thúc khi tất cả quái vật một trong hai đội quân bị giết hết. Đội quân còn lại sẽ chiến thắng. 

Bạn được cho sức mạnh của tất cả các con quái vật. Hãy tìm ra đội chiến thắng.

### **Đầu vào:**

Dòng đầu tiên là số nguyên T, chỉ số lượng test case. Mỗi test case bắt đầu bằng một dòng trắng. Mỗi test case sẽ bắt đầu bằng 1 dòng gồm 2 số dương NG, NM lần lượt là số lượng quái vật của đội Godzilla và MechaGodzilla. Hai dòng tiếp theo. Dòng thứ nhất bao gồm NG số nguyên dương biểu diễn sức mạnh của các con quái vật ở đội Godzilla. Dòng thứ 2 là NM số dương biểu diễn sức mạnh của các con quái vật ở đội MechaGodzilla.

### **Đầu ra:**

Với mỗi test case, in ra kết quả của cuộc chiến. 

Nếu chắc chắn rằng đội Godzilla thắng thì in ra “Godzilla”. 

Nếu chắc chắn rằng đội MechaGodzilla thắng thì in ra “MechaGodzilla”.

Ngược lại thì in ra “uncertain”.

### **Ví dụ:**

**Đầu vào:** 

2 

1 1 

1 

1 

3 2 

1 3 2 

5 5 

**Đầu ra:** 

Godzilla 

MechaGodzilla

### **Giải thích:**

+ Test case 1: mỗi đội có 1 con quái vật, và chúng có cùng độ mạnh. Do đó, quái vật ở đội MechaGodzilla sẽ bị giết. Vì vậy, đội Godzilla sẽ thắng. 

+ Test case 2: sẽ có 3 trận chiến, và trong mỗi trận quái vật của đội Godzilla sẽ chết. Cuối cùng, đội MechaGodzilla sẽ thắng. 

**Chú ý**: với C/C++ sử dụng kiểu int và Pascal sử dụng kiểu longint là OK 

_Các bạn có thể tham khảo đề bài tiếng anh và submit tại đây:[http://www.spoj.com/problems/ARMY/](http://www.spoj.com/problems/ARMY/)_ 

**Phân tích:** 

+ Ta sẽ sắp xếp quái vật theo chiều độ mạnh tăng dần. Tạo 2 con trỏ để duyệt đồng thời 2 dãy. Sau đó kiểm tra xem con nào có độ mạnh yếu hơn thì sẽ bị diệt. 

+ Sau quá trình duyệt, đội nào vẫn tồn tại quái vật thì sẽ thắng. 

+ Thực tế, theo như yêu cầu đề bài thì chắc chắn sẽ có đội thắng.

## **Lời giải:**

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### **Code C/C++:**

`gist:completejavascript/1639e32f8c57c8f80ab8baff4c12f7e7`

_Code by Phạm Văn Lâm_