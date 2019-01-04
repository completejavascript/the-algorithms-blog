webpackJsonp([0xb70e6369e004],{848:function(n,e){n.exports={data:{post:{html:'<h2>Đề bài:</h2>\n<p>"ABEAS Corp." là một công ty rất nhỏ sở hữu duy nhất một chiếc máy bay. Khách hàng của "ABEAS Corp." là những công ty lớn - những công ty đã thuê để điều tiết khi lượng hàng hóa quá tải. Khách hàng gửi những đơn hàng bao gồm thời gian và giá mà khách hàng sẵn sàng trả cho việc thuê máy bay trong thời gian đó. Tất cả những đơn hàng đã được biết trước. Dĩ nhiên không phải tất cả các đơn hàng đều được chấp nhận, và một vài cái sẽ bị từ chối. Eugene LAWLER, "ABEAS Corp." muốn đạt được lợi nhuận cao nhất. </p>\n<p>Bạn được yêu cầu tính toán giải pháp tối ưu này. </p>\n<p><strong>Một ví dụ nhỏ:</strong> </p>\n<p>Xem xét một trường hợp đó là có 4 đơn hàng như sau:</p>\n<ul>\n<li>Đơn hàng 1: (Thời gian bắt đầu 0, thời gian sử dụng 5, giá 10) </li>\n<li>Đơn hàng 2: (Thời gian bắt đầu 3, thời gian sử dụng 7, giá 8) </li>\n<li>Đơn hàng 3: (Thời gian bắt đầu 5, thời gian sử dụng 9, giá 7) </li>\n<li>Đơn hàng 4: (Thời gian bắt đầu 6, thời gian sử dụng 9, giá 8) </li>\n</ul>\n<p>Giải pháp tối ưu là bỏ đi đơn hàng 2 và 3, khi đó lợi nhuận sẽ là 10 + 8 = 18. Chú ý rằng, giải pháp chọn lựa đơn hàng 1 và 3 cũng thỏa mãn về mặt thời gian. Tuy nhiên, lợi nhuận chỉ là 10 + 7 = 17.</p>\n<h3>Đầu vào:</h3>\n<p>Dòng đầu tiên là số T, số lượng test case, T &#x3C;= 30. Dòng đầu của mỗi test case là số n, n &#x3C;= 10000. Tiếp theo là n dòng, mỗi dòng là một đơn hàng, bao gồm 3 số nguyên, lần lượt là thời gian bắt đầu (st), thời gian sử dụng (d) và giá (p), với điều kiện là 0 &#x3C;= st, d &#x3C;= 1000000 và 0 &#x3C;= p &#x3C; 100000.</p>\n<h3>Đầu ra:</h3>\n<p>Với mỗi test case, in ra số cần tìm.</p>\n<h3>Ví dụ:</h3>\n<p><strong>Đầu vào:</strong></p>\n<pre><code>1\n4\n0 5 10\n3 7 14\n5 9 7\n6 9 8\n</code></pre>\n<p><strong>Đầu ra:</strong></p>\n<p>18</p>\n<p><em>Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: <a href="http://www.spoj.com/problems/RENT/">http://www.spoj.com/problems/RENT/</a></em></p>\n<h3>Phân tích:</h3>\n<ul>\n<li>\n<p>Ở đây tôi sử dụng kết hợp <a href="/the-algorithms-blog/category/tham-lam-greedy/">thuật toán tham lam Greedy</a>, <a href="/the-algorithms-blog/category/chia-de-tri-divide-and-conquer/">thuật toán chia để trị Divide and conquer</a> và <a href="/the-algorithms-blog/category/quy-hoach-dong-dynamic-programming/">thuật toán quy hoạch động Dynamic programming</a>.</p>\n</li>\n<li>\n<p>Trong đó, thuật toán tham lam thể hiện ở chỗ đó là đầu tiên tôi sẽ sử dụng thuật toán sắp xếp nhanh quick sort để sắp xếp các đơn hàng theo thời gian kết thúc tăng dần.</p>\n</li>\n<li>\n<p>Tiếp theo, thuật toán quy hoạch động thể hiện ở chỗ đó là tôi dùng một mảng, trong đó <code>Memo[i]</code> để lưu lại số tiến lớn nhất thu được khi chỉ chọn các đơn hàng từ 1 đến i. Như vậy rõ ràng kết quả cần tìm là Memo[N]. </p>\n</li>\n<li>\n<p>Trường hợp cơ sở ở đây là <code>Memo[i] = Price[i]</code> - tức là chỉ chọn 1 đơn hàng thứ i.</p>\n</li>\n<li>\n<p>Ta có công thức quy hoạch động là <code>Memo[i] = Max{Memo[i], Memo[i - 1], Price[i] + Memo[k]}</code></p>\n</li>\n<li>\n<p>Trong đó: <code>Memo[i - 1]</code> ứng với trường hợp không chọn đơn hàng thứ i; <code>Price[i] + Memo[k]</code> ứng với trường hợp chọn đơn hàng thứ i, và k là số lớn nhất thỏa mãn thời gian kết thúc tại k &#x3C; thời gian bắt đầu tại i - đảm bảo thời gian không bị chồng lên nhau.</p>\n</li>\n<li>\n<p>Để tìm ra số k nhanh nhất tôi sử dụng thuật toán chia để trị hay tìm kiếm nhị phân.</p>\n</li>\n</ul>\n<h2>Lời giải:</h2>\n<p>(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)</p>\n<h3>Code C/C++:</h3>\n<p><div id="gist91919840" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-rent-cpp" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-c ">\n      \n<table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-rent-cpp-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-rent-cpp-LC1" class="blob-code blob-code-inner js-file-line">#<span class="pl-k">include</span> <span class="pl-s"><span class="pl-pds">&lt;</span>iostream<span class="pl-pds">&gt;</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-rent-cpp-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">using</span> <span class="pl-k">namespace</span> <span class="pl-en">std</span><span class="pl-k">;</span></td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-rent-cpp-LC3" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-rent-cpp-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-k">int</span> MAX = <span class="pl-c1">10005</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-rent-cpp-LC5" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-rent-cpp-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> N;</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-rent-cpp-LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> Start[MAX], Finish[MAX], Price[MAX];</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-rent-cpp-LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-k">long</span> <span class="pl-k">long</span> Memo[MAX];\t</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-rent-cpp-LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Memo[i] là số tiền lớn nhất khi chỉ chọn các đơn hàng từ 1 đến i</span></td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-rent-cpp-LC10" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-rent-cpp-LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-k">void</span> <span class="pl-en">QuickSort</span>(<span class="pl-k">int</span> left, <span class="pl-k">int</span> right)</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-rent-cpp-LC12" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-rent-cpp-LC13" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> l = left, r = right;</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L14" class="blob-num js-line-number" data-line-number="14"></td>\n        <td id="file-rent-cpp-LC14" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> pivot = Finish[(l + r) / <span class="pl-c1">2</span>];</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L15" class="blob-num js-line-number" data-line-number="15"></td>\n        <td id="file-rent-cpp-LC15" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L16" class="blob-num js-line-number" data-line-number="16"></td>\n        <td id="file-rent-cpp-LC16" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">while</span>(l &lt;= r)</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L17" class="blob-num js-line-number" data-line-number="17"></td>\n        <td id="file-rent-cpp-LC17" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L18" class="blob-num js-line-number" data-line-number="18"></td>\n        <td id="file-rent-cpp-LC18" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">while</span>(Finish[l] &lt; pivot) l++;</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L19" class="blob-num js-line-number" data-line-number="19"></td>\n        <td id="file-rent-cpp-LC19" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">while</span>(Finish[r] &gt; pivot) r--;</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L20" class="blob-num js-line-number" data-line-number="20"></td>\n        <td id="file-rent-cpp-LC20" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L21" class="blob-num js-line-number" data-line-number="21"></td>\n        <td id="file-rent-cpp-LC21" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">if</span>(l &lt;= r)</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L22" class="blob-num js-line-number" data-line-number="22"></td>\n        <td id="file-rent-cpp-LC22" class="blob-code blob-code-inner js-file-line">\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L23" class="blob-num js-line-number" data-line-number="23"></td>\n        <td id="file-rent-cpp-LC23" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">int</span> temp1 = Finish[l];\t<span class="pl-k">int</span> temp2 = Start[l];\t<span class="pl-k">int</span> temp3 = Price[l];</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L24" class="blob-num js-line-number" data-line-number="24"></td>\n        <td id="file-rent-cpp-LC24" class="blob-code blob-code-inner js-file-line">\t\t\tFinish[l] = Finish[r];\tStart[l] = Start[r];\tPrice[l] = Price[r];</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L25" class="blob-num js-line-number" data-line-number="25"></td>\n        <td id="file-rent-cpp-LC25" class="blob-code blob-code-inner js-file-line">\t\t\tFinish[r] = temp1;\t\tStart[r] = temp2;\t\tPrice[r] = temp3;\t</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L26" class="blob-num js-line-number" data-line-number="26"></td>\n        <td id="file-rent-cpp-LC26" class="blob-code blob-code-inner js-file-line">\t\t\tl++;</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L27" class="blob-num js-line-number" data-line-number="27"></td>\n        <td id="file-rent-cpp-LC27" class="blob-code blob-code-inner js-file-line">\t\t\tr--;</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L28" class="blob-num js-line-number" data-line-number="28"></td>\n        <td id="file-rent-cpp-LC28" class="blob-code blob-code-inner js-file-line">\t\t}\t</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L29" class="blob-num js-line-number" data-line-number="29"></td>\n        <td id="file-rent-cpp-LC29" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L30" class="blob-num js-line-number" data-line-number="30"></td>\n        <td id="file-rent-cpp-LC30" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L31" class="blob-num js-line-number" data-line-number="31"></td>\n        <td id="file-rent-cpp-LC31" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">if</span>(l &lt; right) <span class="pl-c1">QuickSort</span>(l, right);</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L32" class="blob-num js-line-number" data-line-number="32"></td>\n        <td id="file-rent-cpp-LC32" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">if</span>(left &lt; r) <span class="pl-c1">QuickSort</span>(left, r);</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L33" class="blob-num js-line-number" data-line-number="33"></td>\n        <td id="file-rent-cpp-LC33" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L34" class="blob-num js-line-number" data-line-number="34"></td>\n        <td id="file-rent-cpp-LC34" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L35" class="blob-num js-line-number" data-line-number="35"></td>\n        <td id="file-rent-cpp-LC35" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Tìm số k lớn nhất thoả mãn Finish[k] &lt; Start[i]</span></td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L36" class="blob-num js-line-number" data-line-number="36"></td>\n        <td id="file-rent-cpp-LC36" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Nếu không tìm thấy thì trả về -1</span></td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L37" class="blob-num js-line-number" data-line-number="37"></td>\n        <td id="file-rent-cpp-LC37" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">BinarySearch</span>(<span class="pl-k">int</span> i)</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L38" class="blob-num js-line-number" data-line-number="38"></td>\n        <td id="file-rent-cpp-LC38" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L39" class="blob-num js-line-number" data-line-number="39"></td>\n        <td id="file-rent-cpp-LC39" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> left = <span class="pl-c1">1</span>, right = i;</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L40" class="blob-num js-line-number" data-line-number="40"></td>\n        <td id="file-rent-cpp-LC40" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> k;</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L41" class="blob-num js-line-number" data-line-number="41"></td>\n        <td id="file-rent-cpp-LC41" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L42" class="blob-num js-line-number" data-line-number="42"></td>\n        <td id="file-rent-cpp-LC42" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">while</span>(left &lt; right - <span class="pl-c1">1</span>)</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L43" class="blob-num js-line-number" data-line-number="43"></td>\n        <td id="file-rent-cpp-LC43" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L44" class="blob-num js-line-number" data-line-number="44"></td>\n        <td id="file-rent-cpp-LC44" class="blob-code blob-code-inner js-file-line">\t\tk = (left + right) / <span class="pl-c1">2</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L45" class="blob-num js-line-number" data-line-number="45"></td>\n        <td id="file-rent-cpp-LC45" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L46" class="blob-num js-line-number" data-line-number="46"></td>\n        <td id="file-rent-cpp-LC46" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">if</span>(Finish[k] &lt; Start[i]) left = k;</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L47" class="blob-num js-line-number" data-line-number="47"></td>\n        <td id="file-rent-cpp-LC47" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">else</span> right = k - <span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L48" class="blob-num js-line-number" data-line-number="48"></td>\n        <td id="file-rent-cpp-LC48" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L49" class="blob-num js-line-number" data-line-number="49"></td>\n        <td id="file-rent-cpp-LC49" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L50" class="blob-num js-line-number" data-line-number="50"></td>\n        <td id="file-rent-cpp-LC50" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">if</span>(Finish[right] &lt; Start[i]) <span class="pl-k">return</span> right;</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L51" class="blob-num js-line-number" data-line-number="51"></td>\n        <td id="file-rent-cpp-LC51" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">if</span>(Finish[left] &lt; Start[i]) <span class="pl-k">return</span> left;</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L52" class="blob-num js-line-number" data-line-number="52"></td>\n        <td id="file-rent-cpp-LC52" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">return</span> -<span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L53" class="blob-num js-line-number" data-line-number="53"></td>\n        <td id="file-rent-cpp-LC53" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L54" class="blob-num js-line-number" data-line-number="54"></td>\n        <td id="file-rent-cpp-LC54" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L55" class="blob-num js-line-number" data-line-number="55"></td>\n        <td id="file-rent-cpp-LC55" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">main</span>(<span class="pl-k">int</span> argc, <span class="pl-k">char</span>** argv)</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L56" class="blob-num js-line-number" data-line-number="56"></td>\n        <td id="file-rent-cpp-LC56" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L57" class="blob-num js-line-number" data-line-number="57"></td>\n        <td id="file-rent-cpp-LC57" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> T, test_case;</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L58" class="blob-num js-line-number" data-line-number="58"></td>\n        <td id="file-rent-cpp-LC58" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c"><span class="pl-c">//</span>freopen(&quot;input.txt&quot;, &quot;r&quot;, stdin);</span></td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L59" class="blob-num js-line-number" data-line-number="59"></td>\n        <td id="file-rent-cpp-LC59" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c1">ios::sync_with_stdio</span>(<span class="pl-c1">false</span>);</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L60" class="blob-num js-line-number" data-line-number="60"></td>\n        <td id="file-rent-cpp-LC60" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L61" class="blob-num js-line-number" data-line-number="61"></td>\n        <td id="file-rent-cpp-LC61" class="blob-code blob-code-inner js-file-line">\tcin &gt;&gt; T;</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L62" class="blob-num js-line-number" data-line-number="62"></td>\n        <td id="file-rent-cpp-LC62" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">for</span>(test_case = <span class="pl-c1">0</span>; test_case  &lt; T; test_case++)</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L63" class="blob-num js-line-number" data-line-number="63"></td>\n        <td id="file-rent-cpp-LC63" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L64" class="blob-num js-line-number" data-line-number="64"></td>\n        <td id="file-rent-cpp-LC64" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c"><span class="pl-c">//</span> Nhập đầu vào</span></td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L65" class="blob-num js-line-number" data-line-number="65"></td>\n        <td id="file-rent-cpp-LC65" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">int</span> d;</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L66" class="blob-num js-line-number" data-line-number="66"></td>\n        <td id="file-rent-cpp-LC66" class="blob-code blob-code-inner js-file-line">\t\tcin &gt;&gt; N;</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L67" class="blob-num js-line-number" data-line-number="67"></td>\n        <td id="file-rent-cpp-LC67" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">1</span>; i &lt;= N; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L68" class="blob-num js-line-number" data-line-number="68"></td>\n        <td id="file-rent-cpp-LC68" class="blob-code blob-code-inner js-file-line">\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L69" class="blob-num js-line-number" data-line-number="69"></td>\n        <td id="file-rent-cpp-LC69" class="blob-code blob-code-inner js-file-line">\t\t\tcin &gt;&gt; Start[i] &gt;&gt; d &gt;&gt; Price[i];</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L70" class="blob-num js-line-number" data-line-number="70"></td>\n        <td id="file-rent-cpp-LC70" class="blob-code blob-code-inner js-file-line">\t\t\tFinish[i] = Start[i] + d;</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L71" class="blob-num js-line-number" data-line-number="71"></td>\n        <td id="file-rent-cpp-LC71" class="blob-code blob-code-inner js-file-line">\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L72" class="blob-num js-line-number" data-line-number="72"></td>\n        <td id="file-rent-cpp-LC72" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L73" class="blob-num js-line-number" data-line-number="73"></td>\n        <td id="file-rent-cpp-LC73" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c"><span class="pl-c">//</span> Sắp xếp các đơn hàng theo chiều tăng của thời gian kết thúc</span></td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L74" class="blob-num js-line-number" data-line-number="74"></td>\n        <td id="file-rent-cpp-LC74" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c1">QuickSort</span>(<span class="pl-c1">1</span>, N);</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L75" class="blob-num js-line-number" data-line-number="75"></td>\n        <td id="file-rent-cpp-LC75" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L76" class="blob-num js-line-number" data-line-number="76"></td>\n        <td id="file-rent-cpp-LC76" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c"><span class="pl-c">//</span> Trường hợp cơ sở</span></td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L77" class="blob-num js-line-number" data-line-number="77"></td>\n        <td id="file-rent-cpp-LC77" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">1</span>; i &lt;= N; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L78" class="blob-num js-line-number" data-line-number="78"></td>\n        <td id="file-rent-cpp-LC78" class="blob-code blob-code-inner js-file-line">\t\t\tMemo[i] = (<span class="pl-k">long</span> <span class="pl-k">long</span>)Price[i];</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L79" class="blob-num js-line-number" data-line-number="79"></td>\n        <td id="file-rent-cpp-LC79" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L80" class="blob-num js-line-number" data-line-number="80"></td>\n        <td id="file-rent-cpp-LC80" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">2</span>; i &lt;= N; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L81" class="blob-num js-line-number" data-line-number="81"></td>\n        <td id="file-rent-cpp-LC81" class="blob-code blob-code-inner js-file-line">\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L82" class="blob-num js-line-number" data-line-number="82"></td>\n        <td id="file-rent-cpp-LC82" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-c"><span class="pl-c">//</span> Không chọn đơn hàng thứ i</span></td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L83" class="blob-num js-line-number" data-line-number="83"></td>\n        <td id="file-rent-cpp-LC83" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">if</span>(Memo[i-<span class="pl-c1">1</span>] &gt; Memo[i]) Memo[i] = Memo[i-<span class="pl-c1">1</span>];</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L84" class="blob-num js-line-number" data-line-number="84"></td>\n        <td id="file-rent-cpp-LC84" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L85" class="blob-num js-line-number" data-line-number="85"></td>\n        <td id="file-rent-cpp-LC85" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-c"><span class="pl-c">//</span> Chọn đơn hàng thứ i</span></td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L86" class="blob-num js-line-number" data-line-number="86"></td>\n        <td id="file-rent-cpp-LC86" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-c"><span class="pl-c">//</span> Tìm số k lớn nhất sao cho Finish[k] &lt; Start[i]</span></td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L87" class="blob-num js-line-number" data-line-number="87"></td>\n        <td id="file-rent-cpp-LC87" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">int</span> k = <span class="pl-c1">BinarySearch</span>(i);</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L88" class="blob-num js-line-number" data-line-number="88"></td>\n        <td id="file-rent-cpp-LC88" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">long</span> <span class="pl-k">long</span> temp = (<span class="pl-k">long</span> <span class="pl-k">long</span>)Price[i] + (<span class="pl-k">long</span> <span class="pl-k">long</span>)Memo[k];</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L89" class="blob-num js-line-number" data-line-number="89"></td>\n        <td id="file-rent-cpp-LC89" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">if</span>(k &gt; -<span class="pl-c1">1</span> &amp;&amp; temp &gt; Memo[i]) Memo[i] = temp;</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L90" class="blob-num js-line-number" data-line-number="90"></td>\n        <td id="file-rent-cpp-LC90" class="blob-code blob-code-inner js-file-line">\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L91" class="blob-num js-line-number" data-line-number="91"></td>\n        <td id="file-rent-cpp-LC91" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L92" class="blob-num js-line-number" data-line-number="92"></td>\n        <td id="file-rent-cpp-LC92" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c"><span class="pl-c">//</span> Print the answer to standard output(screen).</span></td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L93" class="blob-num js-line-number" data-line-number="93"></td>\n        <td id="file-rent-cpp-LC93" class="blob-code blob-code-inner js-file-line">\t\tcout &lt;&lt; Memo[N] &lt;&lt; endl;</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L94" class="blob-num js-line-number" data-line-number="94"></td>\n        <td id="file-rent-cpp-LC94" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L95" class="blob-num js-line-number" data-line-number="95"></td>\n        <td id="file-rent-cpp-LC95" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">return</span> <span class="pl-c1">0</span>;<span class="pl-c"><span class="pl-c">//</span>Your program should return 0 on normal termination.</span></td>\n      </tr>\n      <tr>\n        <td id="file-rent-cpp-L96" class="blob-num js-line-number" data-line-number="96"></td>\n        <td id="file-rent-cpp-LC96" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/completejavascript/acc8dc4e20e5ac884d34868667efbad9/raw/b17cd1673e4355d4cd582ef584f4ee5152956634/RENT.cpp" style="float:right">view raw</a>\n        <a href="https://gist.github.com/completejavascript/acc8dc4e20e5ac884d34868667efbad9#file-rent-cpp">RENT.cpp</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div>\n</p>\n<p><em>Code by Phạm Văn Lâm.</em></p>',id:"f:/Github/the-algorithms-blog/src/posts/2016-11-22---spoj-com-thuat-toan-bai-rent-rent-your-airplane-and-make-money/index.md absPath of file >>> MarkdownRemark",frontmatter:{title:"SPOJ.COM – Thuật toán bài RENT - Rent your airplane and make money",date:"22/11/2016",categories:["spoj","Chia để trị - Divide and Conquer","Quy hoạch động - Dynamic programming","Tham lam - Greedy"],tags:["phạm văn lâm","spoj.com","thuật toán","thuật toán spoj.com","chia để trị divide and conquer","tham lam greedy","quay lui có điều kiện backtracking"]},fields:{slug:"/spoj-com-thuat-toan-bai-rent-rent-your-airplane-and-make-money/"},excerpt:'Đề bài: "ABEAS Corp." là một công ty rất nhỏ sở hữu duy nhất một chiếc máy bay. Khách hàng của "ABEAS Corp." là những công ty lớn - những…',timeToRead:7},prevPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài ACPC10A - What’s Next"},fields:{slug:"/spoj-com-thuat-toan-bai-acpc10a-whats-next/"}},nextPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài INVCNT - Inversion Count"},fields:{slug:"/spoj-com-thuat-toan-bai-invcnt-inversion-count/"}},site:{siteMetadata:{title:"Algorithms Blog",siteUrl:"https://thuattoan.phamvanlam.com",twitterHandle:"@CmpltJavaScript",fbCommentId:"728566430818562",fbId:"100013577851883"}}},pathContext:{slug:"/spoj-com-thuat-toan-bai-rent-rent-your-airplane-and-make-money/",prevSlug:"/spoj-com-thuat-toan-bai-acpc10a-whats-next/",nextSlug:"/spoj-com-thuat-toan-bai-invcnt-inversion-count/"}}}});
//# sourceMappingURL=path---spoj-com-thuat-toan-bai-rent-rent-your-airplane-and-make-money-e80aff80a504e42048de.js.map