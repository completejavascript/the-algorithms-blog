webpackJsonp([0x6c93b4c35e0e],{757:function(n,a){n.exports={data:{post:{html:'<h2><strong>Đề bài:</strong></h2>\n<p>Mạnh đã đến siêu thị để mua chính xác ‘k’ Kg táo cho ‘n’ người bạn của anh ta. Tuy nhiên siêu thị này rất kì lạ. Giá của các sản phẩm rất là khác nhau. Do đó, Mạnh đã đi đến khu vực bán táo để hỏi về giá của chúng. Người bán hàng đưa cho anh ta một cái bảng giá. Và Mạnh nhận thấy rằng giá của táo không được tính dựa trên 1 Kg. Táo được đóng gói trong bao bì, mỗi cái chứa ‘x’ Kg táo, x > 0 và ‘x’ là số nguyên. Một gói ‘x’ Kg táo có giá là ‘y’ VNĐ. Vì vậy có một tấm bảng được đặt trên bàn với số ‘y’ là giá của của một gói ‘x’ Kg táo. Nếu ‘y’ là -1 thì nó có nghĩa là gói đó sẽ không được bán. Với những thông tin như vậy, Mạnh quyết định mua tối đa ‘n’ gói cho ‘n’ người bạn của anh ấy. Nói cách khác là Mạnh không được phép mua nhiều hơn ‘n’ gói táo. </p>\n<p>Mạnh rất quý bạn của anh ấy nên không muốn làm thất vọng họ. Bây giờ, anh ấy sẽ nói cho bạn biết về số lượng những người bạn. Và bạn phải nói cho anh ấy biết về số lượng tiền tối thiểu mà Mạnh phải bỏ ra.</p>\n<h3><strong>Đầu vào:</strong></h3>\n<p>Dòng đầu tiên là số lượng test cases, C. Mỗi test case sẽ gồm 2 dòng. Dòng đầu tiên chứa số N và K, lần lượt là số lượng bạn của anh ấy và lượng táo (Kg) mà Mạnh muốn mua. Dòng thứ hai bao gồm K số nguyên phân biệt với nhau bởi dấu cách. Trong đó, số nguyên thứ i là giá của gói ‘i’ Kg. Và giá trị -1 có nghĩa là gói tương ứng sẽ không được bán. (i được tính từ 1) </p>\n<p><strong>Ràng buộc:</strong> </p>\n<p>0 &#x3C; N &#x3C;= 100 </p>\n<p>0 &#x3C; K &#x3C;= 100 </p>\n<p>0 &#x3C; Giá tiền &#x3C;= 1000</p>\n<h3><strong>Đầu ra:</strong></h3>\n<p>Đầu ra cho mỗi test case là một dòng chứa số lượng tiền mà Mạnh phải bỏ ra. In ra -1 nếu như Mạnh không thể làm hài lòng bạn anh ấy.</p>\n<h3><strong>Ví dụ:</strong></h3>\n<p><strong>Đầu vào:</strong> </p>\n<p>2 </p>\n<p>3 5 </p>\n<p>-1 -1 4 5 -1 </p>\n<p>5 5 </p>\n<p>1 2 3 4 5 </p>\n<p><strong>Đầu ra:</strong> </p>\n<p>-1\n5 </p>\n<p><em>Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: <a href="http://www.spoj.com/problems/ABA12C/">http://www.spoj.com/problems/ABA12C/</a></em> </p>\n<p><strong>Giải thích:</strong> </p>\n<ol>\n<li>\n<p>Có N = 3 người bạn, K = 5 Kg táo cần mua. Tiếp theo là giá của 5 gói (1, 2, 3, 4, 5) Kg. Tuy nhiên gói 1, 2 và 5 Kg không bán. Do đó chỉ còn gói 3 và 4 Kg. Nên Mạnh không thể mua chính xác 5 Kg táo. Vì vậy, anh ấy không thể làm hài lòng những người bạn. </p>\n</li>\n<li>\n<p>Có N = 5 người bạn, K = 5 Kg táo cần mua. Giá của các gói 1, 2, 3, 4, 5 Kg tương ứng là 1, 2, 3, 4, 5. Mạnh có thể mua 5 gói 1 Kg. Vì vậy số tiền nhỏ nhất mà Mạnh cần bỏ ra là 5.</p>\n</li>\n</ol>\n<h3><strong>Phân tích:</strong></h3>\n<p>– Đầu vào N, K có giá trị lớn nhất là 100. Nếu bạn giải quyết bài toán sử dụng phương pháp vét cạn. Thì ở đây, mỗi gói sẽ có hai khả năng là được chọn hoặc không. </p>\n<p>=> Độ phức tạp của thuật toán trong trường hợp xấu nhất là 2^100 (thực tế độ phức tạp tính ra là 1000000000 thì thời gian chạy sẽ xấp xỉ 1 giây). Do đó, dùng vét cạn sẽ bị time limit. </p>\n<p>– Với những bài toán dạng này, ta sẽ sử dụng phương pháp quy hoạch động. </p>\n<p>Với chú ý ở đây là: <code>MinMoney[i] = Min{MinMoney[i], MinMoney[j] + Price[i - j]}</code> </p>\n<p>với: </p>\n<p>– MinMoney[i], MinMoney[j] là số tiền nhỏ nhất để mua đúng i , j kg </p>\n<p>– Price[i – j] là giá của gói ‘i – j’ kg.</p>\n<h2><strong>Lời giải:</strong></h2>\n<p>(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu.  Nên rất mong nhận được sự chia sẻ của các bạn.)</p>\n<h3><strong>Code C/ C++:</strong></h3>\n<p><div id="gist91916725" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-aba12c-cpp" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-c">\n      <table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-aba12c-cpp-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-aba12c-cpp-LC1" class="blob-code blob-code-inner js-file-line">#<span class="pl-k">include</span> <span class="pl-s"><span class="pl-pds">&lt;</span>iostream<span class="pl-pds">&gt;</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-cpp-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-aba12c-cpp-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">using</span> <span class="pl-k">namespace</span> <span class="pl-en">std</span><span class="pl-k">;</span></td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-cpp-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-aba12c-cpp-LC3" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-cpp-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-aba12c-cpp-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-k">int</span> MAX = <span class="pl-c1">105</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-cpp-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-aba12c-cpp-LC5" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-cpp-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-aba12c-cpp-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> N;                  <span class="pl-c"><span class="pl-c">//</span> Số lượng bạn</span></td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-cpp-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-aba12c-cpp-LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> K;                  <span class="pl-c"><span class="pl-c">//</span> Số lượng Kg táo cần mua</span></td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-cpp-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-aba12c-cpp-LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> Price[MAX];         <span class="pl-c"><span class="pl-c">//</span> Lưu giá của các gói, Price[i] ứng với giá của gói thứ i</span></td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-cpp-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-aba12c-cpp-LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> MinMoney[MAX][MAX]; <span class="pl-c"><span class="pl-c">//</span> MinMoney[i][j] : Số tiền nhỏ nhất cần bỏ ra để mua i Kg táo,</span></td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-cpp-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-aba12c-cpp-LC10" class="blob-code blob-code-inner js-file-line">                        <span class="pl-c"><span class="pl-c">//</span> và số gói không quá j</span></td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-cpp-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-aba12c-cpp-LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">main</span>()</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-cpp-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-aba12c-cpp-LC12" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-cpp-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-aba12c-cpp-LC13" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c1">ios::sync_with_stdio</span>(<span class="pl-c1">false</span>);</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-cpp-L14" class="blob-num js-line-number" data-line-number="14"></td>\n        <td id="file-aba12c-cpp-LC14" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c"><span class="pl-c">//</span>freopen(&quot;input.txt&quot;,&quot;r&quot;,stdin);</span></td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-cpp-L15" class="blob-num js-line-number" data-line-number="15"></td>\n        <td id="file-aba12c-cpp-LC15" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-cpp-L16" class="blob-num js-line-number" data-line-number="16"></td>\n        <td id="file-aba12c-cpp-LC16" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> Testcase = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-cpp-L17" class="blob-num js-line-number" data-line-number="17"></td>\n        <td id="file-aba12c-cpp-LC17" class="blob-code blob-code-inner js-file-line">\tcin &gt;&gt; Testcase;</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-cpp-L18" class="blob-num js-line-number" data-line-number="18"></td>\n        <td id="file-aba12c-cpp-LC18" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">for</span>(<span class="pl-k">int</span> tc = <span class="pl-c1">0</span>; tc &lt; Testcase; tc++)</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-cpp-L19" class="blob-num js-line-number" data-line-number="19"></td>\n        <td id="file-aba12c-cpp-LC19" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-cpp-L20" class="blob-num js-line-number" data-line-number="20"></td>\n        <td id="file-aba12c-cpp-LC20" class="blob-code blob-code-inner js-file-line">\t\tcin &gt;&gt; N &gt;&gt; K;</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-cpp-L21" class="blob-num js-line-number" data-line-number="21"></td>\n        <td id="file-aba12c-cpp-LC21" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">1</span>; i &lt;= K; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-cpp-L22" class="blob-num js-line-number" data-line-number="22"></td>\n        <td id="file-aba12c-cpp-LC22" class="blob-code blob-code-inner js-file-line">\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-cpp-L23" class="blob-num js-line-number" data-line-number="23"></td>\n        <td id="file-aba12c-cpp-LC23" class="blob-code blob-code-inner js-file-line">\t\t\tcin &gt;&gt; Price[i];</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-cpp-L24" class="blob-num js-line-number" data-line-number="24"></td>\n        <td id="file-aba12c-cpp-LC24" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-cpp-L25" class="blob-num js-line-number" data-line-number="25"></td>\n        <td id="file-aba12c-cpp-LC25" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-c"><span class="pl-c">//</span> Khởi tạo số tiền nhỏ nhất cần bỏ ra để mua chính xác i Kg táo, </span></td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-cpp-L26" class="blob-num js-line-number" data-line-number="26"></td>\n        <td id="file-aba12c-cpp-LC26" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-c"><span class="pl-c">//</span> chính là số tiền cần bỏ ra để mua 1 gói &#39;i&#39; Kg táo.\t</span></td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-cpp-L27" class="blob-num js-line-number" data-line-number="27"></td>\n        <td id="file-aba12c-cpp-LC27" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">for</span>(<span class="pl-k">int</span> j = <span class="pl-c1">1</span>; j &lt;= N; j++)</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-cpp-L28" class="blob-num js-line-number" data-line-number="28"></td>\n        <td id="file-aba12c-cpp-LC28" class="blob-code blob-code-inner js-file-line">\t\t\t\tMinMoney[i][j] = Price[i];</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-cpp-L29" class="blob-num js-line-number" data-line-number="29"></td>\n        <td id="file-aba12c-cpp-LC29" class="blob-code blob-code-inner js-file-line">\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-cpp-L30" class="blob-num js-line-number" data-line-number="30"></td>\n        <td id="file-aba12c-cpp-LC30" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-cpp-L31" class="blob-num js-line-number" data-line-number="31"></td>\n        <td id="file-aba12c-cpp-LC31" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c"><span class="pl-c">//</span> Cập nhật lại mảng MinMoney[] sử dụng quy hoạch động</span></td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-cpp-L32" class="blob-num js-line-number" data-line-number="32"></td>\n        <td id="file-aba12c-cpp-LC32" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">2</span>; i &lt;= K; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-cpp-L33" class="blob-num js-line-number" data-line-number="33"></td>\n        <td id="file-aba12c-cpp-LC33" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">for</span>(<span class="pl-k">int</span> x = <span class="pl-c1">2</span>; x &lt;= N; x++)</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-cpp-L34" class="blob-num js-line-number" data-line-number="34"></td>\n        <td id="file-aba12c-cpp-LC34" class="blob-code blob-code-inner js-file-line">\t\t\t\t<span class="pl-k">for</span>(<span class="pl-k">int</span> j = <span class="pl-c1">1</span>; j &lt; i; j++)</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-cpp-L35" class="blob-num js-line-number" data-line-number="35"></td>\n        <td id="file-aba12c-cpp-LC35" class="blob-code blob-code-inner js-file-line">\t\t\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-cpp-L36" class="blob-num js-line-number" data-line-number="36"></td>\n        <td id="file-aba12c-cpp-LC36" class="blob-code blob-code-inner js-file-line">\t\t\t\t\t<span class="pl-k">if</span>(MinMoney[j][x - <span class="pl-c1">1</span>] &lt; <span class="pl-c1">0</span> || Price[i - j] &lt; <span class="pl-c1">0</span>) <span class="pl-k">continue</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-cpp-L37" class="blob-num js-line-number" data-line-number="37"></td>\n        <td id="file-aba12c-cpp-LC37" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-cpp-L38" class="blob-num js-line-number" data-line-number="38"></td>\n        <td id="file-aba12c-cpp-LC38" class="blob-code blob-code-inner js-file-line">\t\t\t\t\t<span class="pl-c"><span class="pl-c">//</span> Khi chưa có giá trị MinMoney[i], thì lượng tiền nhỏ nhất </span></td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-cpp-L39" class="blob-num js-line-number" data-line-number="39"></td>\n        <td id="file-aba12c-cpp-LC39" class="blob-code blob-code-inner js-file-line">\t\t\t\t\t<span class="pl-c"><span class="pl-c">//</span> chính là lượng tiền nhỏ nhất khi đã mua &#39;j&#39; Kg và mua thêm &#39;i-j&#39; Kg</span></td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-cpp-L40" class="blob-num js-line-number" data-line-number="40"></td>\n        <td id="file-aba12c-cpp-LC40" class="blob-code blob-code-inner js-file-line">\t\t\t\t\t<span class="pl-k">int</span> temp = MinMoney[j][x - <span class="pl-c1">1</span>] + Price[i - j];</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-cpp-L41" class="blob-num js-line-number" data-line-number="41"></td>\n        <td id="file-aba12c-cpp-LC41" class="blob-code blob-code-inner js-file-line">\t\t\t\t\t<span class="pl-k">if</span>(MinMoney[i][x] &lt; <span class="pl-c1">0</span> || temp &lt; MinMoney[i][x]) MinMoney[i][x] = temp;</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-cpp-L42" class="blob-num js-line-number" data-line-number="42"></td>\n        <td id="file-aba12c-cpp-LC42" class="blob-code blob-code-inner js-file-line">\t\t\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-cpp-L43" class="blob-num js-line-number" data-line-number="43"></td>\n        <td id="file-aba12c-cpp-LC43" class="blob-code blob-code-inner js-file-line">\t\tcout &lt;&lt; MinMoney[K][N] &lt;&lt; endl;</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-cpp-L44" class="blob-num js-line-number" data-line-number="44"></td>\n        <td id="file-aba12c-cpp-LC44" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-cpp-L45" class="blob-num js-line-number" data-line-number="45"></td>\n        <td id="file-aba12c-cpp-LC45" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">return</span> <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-cpp-L46" class="blob-num js-line-number" data-line-number="46"></td>\n        <td id="file-aba12c-cpp-LC46" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/completejavascript/f1d8c151d139f4c76d565eb5e3f587cb/raw/7653185c71d2965e3d6f1b1cc6c07dda0200df5d/ABA12C.cpp" style="float:right">view raw</a>\n        <a href="https://gist.github.com/completejavascript/f1d8c151d139f4c76d565eb5e3f587cb#file-aba12c-cpp">ABA12C.cpp</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div>\n</p>\n<h3>Code Python:</h3>\n<p><div id="gist91916735" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-aba12c-py" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-python">\n      <table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-aba12c-py-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-aba12c-py-LC1" class="blob-code blob-code-inner js-file-line">num_tc <span class="pl-k">=</span> <span class="pl-c1">int</span>(<span class="pl-v">raw_input</span>())</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-py-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-aba12c-py-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">for</span> tc <span class="pl-k">in</span> <span class="pl-v">xrange</span>(<span class="pl-c1">0</span>, num_tc):</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-py-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-aba12c-py-LC3" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">#</span> Nhap dau vao</span></td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-py-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-aba12c-py-LC4" class="blob-code blob-code-inner js-file-line">    N, K <span class="pl-k">=</span> <span class="pl-c1">map</span>(<span class="pl-c1">int</span>, <span class="pl-v">raw_input</span>().split())</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-py-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-aba12c-py-LC5" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-py-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-aba12c-py-LC6" class="blob-code blob-code-inner js-file-line">    price <span class="pl-k">=</span> [<span class="pl-c1">0</span>] <span class="pl-k">*</span> (K <span class="pl-k">+</span> <span class="pl-c1">1</span>)</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-py-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-aba12c-py-LC7" class="blob-code blob-code-inner js-file-line">    price[<span class="pl-c1">1</span>:K<span class="pl-k">+</span><span class="pl-c1">1</span>] <span class="pl-k">=</span> <span class="pl-c1">map</span>(<span class="pl-c1">int</span>, <span class="pl-v">raw_input</span>().split())</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-py-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-aba12c-py-LC8" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-py-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-aba12c-py-LC9" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">#</span> Khoi tao so tien nho nhat de mua i kg tao</span></td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-py-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-aba12c-py-LC10" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">#</span> la so tien de mua 1 goi i Kg tao</span></td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-py-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-aba12c-py-LC11" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-py-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-aba12c-py-LC12" class="blob-code blob-code-inner js-file-line">    min_price <span class="pl-k">=</span> [([<span class="pl-c1">0</span>] <span class="pl-k">*</span> (N <span class="pl-k">+</span> <span class="pl-c1">1</span>)) <span class="pl-k">for</span> row <span class="pl-k">in</span> <span class="pl-v">xrange</span>(K <span class="pl-k">+</span> <span class="pl-c1">1</span>)]</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-py-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-aba12c-py-LC13" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-py-L14" class="blob-num js-line-number" data-line-number="14"></td>\n        <td id="file-aba12c-py-LC14" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> i <span class="pl-k">in</span> <span class="pl-v">xrange</span>(<span class="pl-c1">1</span>, K <span class="pl-k">+</span> <span class="pl-c1">1</span>):</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-py-L15" class="blob-num js-line-number" data-line-number="15"></td>\n        <td id="file-aba12c-py-LC15" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span> j <span class="pl-k">in</span> <span class="pl-v">xrange</span>(<span class="pl-c1">1</span>, N <span class="pl-k">+</span> <span class="pl-c1">1</span>):</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-py-L16" class="blob-num js-line-number" data-line-number="16"></td>\n        <td id="file-aba12c-py-LC16" class="blob-code blob-code-inner js-file-line">            min_price[i][j] <span class="pl-k">=</span> price[i]</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-py-L17" class="blob-num js-line-number" data-line-number="17"></td>\n        <td id="file-aba12c-py-LC17" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-py-L18" class="blob-num js-line-number" data-line-number="18"></td>\n        <td id="file-aba12c-py-LC18" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> i <span class="pl-k">in</span> <span class="pl-v">xrange</span>(<span class="pl-c1">2</span>, K <span class="pl-k">+</span> <span class="pl-c1">1</span>):</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-py-L19" class="blob-num js-line-number" data-line-number="19"></td>\n        <td id="file-aba12c-py-LC19" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span> x <span class="pl-k">in</span> <span class="pl-v">xrange</span>(<span class="pl-c1">2</span>, N <span class="pl-k">+</span> <span class="pl-c1">1</span>):</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-py-L20" class="blob-num js-line-number" data-line-number="20"></td>\n        <td id="file-aba12c-py-LC20" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">for</span> j <span class="pl-k">in</span> <span class="pl-v">xrange</span>(<span class="pl-c1">1</span>, i):</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-py-L21" class="blob-num js-line-number" data-line-number="21"></td>\n        <td id="file-aba12c-py-LC21" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> min_price[j][x <span class="pl-k">-</span> <span class="pl-c1">1</span>] <span class="pl-k">&lt;</span> <span class="pl-c1">0</span> <span class="pl-k">or</span> price[i <span class="pl-k">-</span> j] <span class="pl-k">&lt;</span> <span class="pl-c1">0</span> :</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-py-L22" class="blob-num js-line-number" data-line-number="22"></td>\n        <td id="file-aba12c-py-LC22" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">continue</span></td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-py-L23" class="blob-num js-line-number" data-line-number="23"></td>\n        <td id="file-aba12c-py-LC23" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-py-L24" class="blob-num js-line-number" data-line-number="24"></td>\n        <td id="file-aba12c-py-LC24" class="blob-code blob-code-inner js-file-line">                temp <span class="pl-k">=</span> min_price[j][x <span class="pl-k">-</span> <span class="pl-c1">1</span>] <span class="pl-k">+</span> price[i <span class="pl-k">-</span> j]</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-py-L25" class="blob-num js-line-number" data-line-number="25"></td>\n        <td id="file-aba12c-py-LC25" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-py-L26" class="blob-num js-line-number" data-line-number="26"></td>\n        <td id="file-aba12c-py-LC26" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> min_price[i][x] <span class="pl-k">&lt;</span> <span class="pl-c1">0</span> <span class="pl-k">or</span> temp <span class="pl-k">&lt;</span> min_price[i][x]:</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-py-L27" class="blob-num js-line-number" data-line-number="27"></td>\n        <td id="file-aba12c-py-LC27" class="blob-code blob-code-inner js-file-line">                    min_price[i][x] <span class="pl-k">=</span> temp</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-py-L28" class="blob-num js-line-number" data-line-number="28"></td>\n        <td id="file-aba12c-py-LC28" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-aba12c-py-L29" class="blob-num js-line-number" data-line-number="29"></td>\n        <td id="file-aba12c-py-LC29" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">print</span> min_price[K][N]</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/completejavascript/560e15a3c510308540d56a5cf9ec8ee0/raw/321e5c34ab8b4c996d14fc7c69fabb77510d599c/ABA12C.py" style="float:right">view raw</a>\n        <a href="https://gist.github.com/completejavascript/560e15a3c510308540d56a5cf9ec8ee0#file-aba12c-py">ABA12C.py</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div>\n</p>\n<p><em>Code by Phạm Văn Lâm</em></p>',id:"F:/Github/the-algorithms-blog/src/posts/2016-09-25---spoj-com-thuat-toan-bai-aba12c-buying-apples/index.md absPath of file >>> MarkdownRemark",frontmatter:{title:"SPOJ.COM – Thuật toán bài ABA12C – Buying Apples",date:"25/09/2016",categories:["spoj","Quy hoạch động - Dynamic programming"],tags:["phạm văn lâm","spoj.com","thuật toán","thuật toán spoj.com","quy hoạch động dynamic programming"]},fields:{slug:"/spoj-com-thuat-toan-bai-aba12c-buying-apples/"},excerpt:"Đề bài: Mạnh đã đến siêu thị để mua chính xác ‘k’ Kg táo cho ‘n’ người bạn của anh ta. Tuy nhiên siêu thị này rất kì lạ. Giá của các sản…",timeToRead:8},prevPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài 1AE00 – Rectangles"},fields:{slug:"/spoj-com-thuat-toan-bai-1ae00-rectangles/"}},nextPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài AGGRCOW – Aggressive cows"},fields:{slug:"/spoj-com-thuat-toan-bai-aggrcow-aggressive-cows/"}},site:{siteMetadata:{title:"Algorithms Blog",siteUrl:"http://thuattoan.phamvanlam.com",twitterHandle:"@CmpltJavaScript",fbCommentId:"728566430818562"}}},pathContext:{slug:"/spoj-com-thuat-toan-bai-aba12c-buying-apples/",prevSlug:"/spoj-com-thuat-toan-bai-1ae00-rectangles/",nextSlug:"/spoj-com-thuat-toan-bai-aggrcow-aggressive-cows/"}}}});
//# sourceMappingURL=path---spoj-com-thuat-toan-bai-aba-12-c-buying-apples-1f5a5da5f83e09d5906d.js.map