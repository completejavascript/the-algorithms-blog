webpackJsonp([0x6e1c49f60cd9],{760:function(n,l){n.exports={data:{post:{html:'<h2>Đề bài:</h2>\n<p>Alice và Bob cần gửi những tin nhắn bí mật cho nhau. Và họ đã thảo luận ra cách để mã hoá chúng: </p>\n<p><strong>Alice:</strong> "Chúng ta hãy sử dụng một cách đơn giản. Chúng ta sẽ cho \'A\' ứng với 1, \'B\' ứng với 2,..., cứ như vậy thì \'Z\' sẽ ứng với 26" </p>\n<p><strong>Bob:</strong> "Đó là một cách mã hoá ngớ ngẩn, Alice. Giả sử tớ muốn gửi cho cậu từ \'BEAN\' thì mã sẽ là 25114. Cậu có thể giải mã nó với nhiều cách khác nhau." </p>\n<p><strong>Alice:</strong> "Dĩ nhiên là cậu có thể. Tuy nhiên, cậu sẽ chọn từ nào? Ngoài \'BEAN\' ra thì còn có \'BEAAD\', \'YAAD\', \'YAN\', \'YKD\' và \'BEKD\'. Tớ nghĩ cậu sẽ tìm ra cách giải mã đúng nhất. Và tại sao cậu lại gửi cho tớ từ \'BEAN\'" </p>\n<p><strong>Bob:</strong> "OK, có lẽ đây là một ví dụ không tốt. Nhưng tớ cá là nếu như độ dài xâu là 5000 thì sẽ có hàng tấn cách giải mã khác nhau. Và với rất nhiều những cách đó, chắc hẳn cậu sẽ tìm ra ít nhất 2 cái có nghĩa" </p>\n<p><strong>Alice:</strong> "Có bao nhiêu cách giải mã?" </p>\n<p><strong>Bob:</strong> "Hàng tỉ tỉ cách" Vì một số lí do, Alice vẫn không bị thuyết phục bởi Bob. Vì vậy, cô ấy yêu cầu Bob viết một chương trình để xác định xem có bao nhiêu cách giải mã đối với một xâu cho trước.</p>\n<h3>Đầu vào:</h3>\n<p>Bao gồm nhiều test case, mỗi cái sẽ bao gồm 1 dòng chứa một xâu có tối đa 5000 chữ số, biểu diễn một cách mã hoá hợp lệ. Ví dụ: không có dòng nào bắt đầu bởi \'0\'. Và không có khoảng cách giữa các kí tự. Đầu vào kết thúc bởi \'0\'.</p>\n<h3>Đầu ra:</h3>\n<p>In đáp án. tất cả đáp án sẽ trong phạm vi giới hạn của số nguyên có dấu 64 bit.</p>\n<h3>Ví dụ:</h3>\n<p><strong>Đầu vào:</strong></p>\n<pre><code>25114\n1111111111\n3333333333\n0\n</code></pre>\n<p><strong>Đầu ra:</strong></p>\n<pre><code>6\n89\n1\n</code></pre>\n<p><em>Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: <a href="http://www.spoj.com/problems/ACODE/">http://www.spoj.com/problems/ACODE/</a></em></p>\n<h3><strong>Phân tích:</strong></h3>\n<ul>\n<li>Ở đây tôi sử dụng thuật toán <a href="/the-algorithms-blog/category/quy-hoach-dong-dynamic-programming/">quy hoạch động Dynamic programming</a> và triển khai theo kiểu top - down. Nghĩa là tôi sẽ viết hàm đệ quy để giải quyết bài toán này. </li>\n<li>Tôi sẽ dùng một mảng một chiều là Memo[MAX]. Trong đó, Memo[i] là số cách giải mã được khi tính từ kí tự i đến cuối (i được tính từ 0). Và hàm đệ quy tương ứng là Solve(i) </li>\n<li>Ở đây, vì các chữ cái từ \'A\' đến \'Z\' tương ứng với các số từ 1 đến 26. Do đó, khi duyệt tôi cần chú ý đến hai trường hợp là chọn 1 chữ số hay 2 chữ số để giải mã. </li>\n<li>Có một chú ý ở đây là chữ số \'0\' không thể đứng một mình và không thể đứng trước một chữ số khác. Tức là nếu tôi có đầu vào là: 1026 thì ở đây, chữ cái đầu tiên chắc chắn là K, tương ứng với số 10. Do đó, kết quả có thể là KBF hoặc KZ. Không thể lấy số 1 ra để giải mã. Vì khi đó ta có A026. Mà số 0 hay 02 thì không hợp lệ. </li>\n<li>Công thức đệ quy tôi sẽ viết rõ ở trong code. Các bạn có thể tham khảo ở dưới.</li>\n</ul>\n<h2><strong>Lời giải:</strong></h2>\n<p>(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu.  Nên rất mong nhận được sự chia sẻ của các bạn.)</p>\n<h3><strong>Code C/ C++:</strong></h3>\n<p><div id="gist91918555" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-acode-cpp" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-c">\n      <table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-acode-cpp-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-acode-cpp-LC1" class="blob-code blob-code-inner js-file-line">#<span class="pl-k">include</span> <span class="pl-s"><span class="pl-pds">&lt;</span>iostream<span class="pl-pds">&gt;</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-acode-cpp-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">using</span> <span class="pl-k">namespace</span> <span class="pl-en">std</span><span class="pl-k">;</span></td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-acode-cpp-LC3" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-acode-cpp-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-k">int</span> MAX = <span class="pl-c1">5005</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-acode-cpp-LC5" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-acode-cpp-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-k">char</span> Str[MAX];</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-acode-cpp-LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> Leng;</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-acode-cpp-LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-k">long</span> <span class="pl-k">long</span> Memo[MAX];<span class="pl-c"><span class="pl-c">//</span> Memo[i] là số cách tính từ kí tự i đến cuối.</span></td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-acode-cpp-LC9" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-acode-cpp-LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">GetLeng</span>(<span class="pl-k">char</span> *s)</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-acode-cpp-LC11" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-acode-cpp-LC12" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> leng = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-acode-cpp-LC13" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">while</span>(s[leng] != <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\\0</span><span class="pl-pds">&#39;</span></span>) leng++;</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L14" class="blob-num js-line-number" data-line-number="14"></td>\n        <td id="file-acode-cpp-LC14" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">return</span> leng;</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L15" class="blob-num js-line-number" data-line-number="15"></td>\n        <td id="file-acode-cpp-LC15" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L16" class="blob-num js-line-number" data-line-number="16"></td>\n        <td id="file-acode-cpp-LC16" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L17" class="blob-num js-line-number" data-line-number="17"></td>\n        <td id="file-acode-cpp-LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">/*</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L18" class="blob-num js-line-number" data-line-number="18"></td>\n        <td id="file-acode-cpp-LC18" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* Lấy 2 kí tự tiếp theo trong xâu s, bắt đầu từ vị trí i</span></td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L19" class="blob-num js-line-number" data-line-number="19"></td>\n        <td id="file-acode-cpp-LC19" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* RETURN: giá trị số nguyên của 2 chữ số đó.</span></td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L20" class="blob-num js-line-number" data-line-number="20"></td>\n        <td id="file-acode-cpp-LC20" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">*/</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L21" class="blob-num js-line-number" data-line-number="21"></td>\n        <td id="file-acode-cpp-LC21" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">Get2Next</span>(<span class="pl-k">char</span> *s, <span class="pl-k">int</span> i)</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L22" class="blob-num js-line-number" data-line-number="22"></td>\n        <td id="file-acode-cpp-LC22" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L23" class="blob-num js-line-number" data-line-number="23"></td>\n        <td id="file-acode-cpp-LC23" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">return</span> (s[i] - <span class="pl-s"><span class="pl-pds">&#39;</span>0<span class="pl-pds">&#39;</span></span>) * <span class="pl-c1">10</span> + s[i + <span class="pl-c1">1</span>] - <span class="pl-s"><span class="pl-pds">&#39;</span>0<span class="pl-pds">&#39;</span></span>;</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L24" class="blob-num js-line-number" data-line-number="24"></td>\n        <td id="file-acode-cpp-LC24" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L25" class="blob-num js-line-number" data-line-number="25"></td>\n        <td id="file-acode-cpp-LC25" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L26" class="blob-num js-line-number" data-line-number="26"></td>\n        <td id="file-acode-cpp-LC26" class="blob-code blob-code-inner js-file-line"><span class="pl-k">long</span> <span class="pl-k">long</span> <span class="pl-en">Solve</span>(<span class="pl-k">int</span> i)</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L27" class="blob-num js-line-number" data-line-number="27"></td>\n        <td id="file-acode-cpp-LC27" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L28" class="blob-num js-line-number" data-line-number="28"></td>\n        <td id="file-acode-cpp-LC28" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">if</span>(Str[i] == <span class="pl-s"><span class="pl-pds">&#39;</span>0<span class="pl-pds">&#39;</span></span>) <span class="pl-k">return</span> -<span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L29" class="blob-num js-line-number" data-line-number="29"></td>\n        <td id="file-acode-cpp-LC29" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">if</span>(Memo[i] != -<span class="pl-c1">1</span>) <span class="pl-k">return</span> Memo[i];</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L30" class="blob-num js-line-number" data-line-number="30"></td>\n        <td id="file-acode-cpp-LC30" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L31" class="blob-num js-line-number" data-line-number="31"></td>\n        <td id="file-acode-cpp-LC31" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> t = <span class="pl-c1">Get2Next</span>(Str, i);</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L32" class="blob-num js-line-number" data-line-number="32"></td>\n        <td id="file-acode-cpp-LC32" class="blob-code blob-code-inner js-file-line">\t</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L33" class="blob-num js-line-number" data-line-number="33"></td>\n        <td id="file-acode-cpp-LC33" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">if</span>(t == <span class="pl-c1">10</span> || t == <span class="pl-c1">20</span>)</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L34" class="blob-num js-line-number" data-line-number="34"></td>\n        <td id="file-acode-cpp-LC34" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">return</span> Memo[i] = <span class="pl-c1">Solve</span>(i + <span class="pl-c1">2</span>);</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L35" class="blob-num js-line-number" data-line-number="35"></td>\n        <td id="file-acode-cpp-LC35" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L36" class="blob-num js-line-number" data-line-number="36"></td>\n        <td id="file-acode-cpp-LC36" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">if</span>(t &lt;= <span class="pl-c1">26</span>)</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L37" class="blob-num js-line-number" data-line-number="37"></td>\n        <td id="file-acode-cpp-LC37" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L38" class="blob-num js-line-number" data-line-number="38"></td>\n        <td id="file-acode-cpp-LC38" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">long</span> <span class="pl-k">long</span> t1 = <span class="pl-c1">Solve</span>(i + <span class="pl-c1">1</span>);</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L39" class="blob-num js-line-number" data-line-number="39"></td>\n        <td id="file-acode-cpp-LC39" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">long</span> <span class="pl-k">long</span> t2 = <span class="pl-c1">Solve</span>(i + <span class="pl-c1">2</span>);</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L40" class="blob-num js-line-number" data-line-number="40"></td>\n        <td id="file-acode-cpp-LC40" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L41" class="blob-num js-line-number" data-line-number="41"></td>\n        <td id="file-acode-cpp-LC41" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c"><span class="pl-c">//</span> Kiểm tra xem t1, t2 cái nào hợp lệ.</span></td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L42" class="blob-num js-line-number" data-line-number="42"></td>\n        <td id="file-acode-cpp-LC42" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">if</span>(t1 == -<span class="pl-c1">1</span> &amp;&amp; t2 != -<span class="pl-c1">1</span>) <span class="pl-k">return</span> Memo[i] = <span class="pl-c1">Solve</span>(i + <span class="pl-c1">2</span>); </td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L43" class="blob-num js-line-number" data-line-number="43"></td>\n        <td id="file-acode-cpp-LC43" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">if</span>(t1 != -<span class="pl-c1">1</span> &amp;&amp; t2 == -<span class="pl-c1">1</span>) <span class="pl-k">return</span> Memo[i] = <span class="pl-c1">Solve</span>(i + <span class="pl-c1">1</span>);</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L44" class="blob-num js-line-number" data-line-number="44"></td>\n        <td id="file-acode-cpp-LC44" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">if</span>(t1 == -<span class="pl-c1">1</span> &amp;&amp; t2 == -<span class="pl-c1">1</span>) <span class="pl-k">return</span> -<span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L45" class="blob-num js-line-number" data-line-number="45"></td>\n        <td id="file-acode-cpp-LC45" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">return</span> Memo[i] = <span class="pl-c1">Solve</span>(i + <span class="pl-c1">1</span>) + <span class="pl-c1">Solve</span>(i + <span class="pl-c1">2</span>); </td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L46" class="blob-num js-line-number" data-line-number="46"></td>\n        <td id="file-acode-cpp-LC46" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L47" class="blob-num js-line-number" data-line-number="47"></td>\n        <td id="file-acode-cpp-LC47" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">return</span> Memo[i] = <span class="pl-c1">Solve</span>(i + <span class="pl-c1">1</span>);</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L48" class="blob-num js-line-number" data-line-number="48"></td>\n        <td id="file-acode-cpp-LC48" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L49" class="blob-num js-line-number" data-line-number="49"></td>\n        <td id="file-acode-cpp-LC49" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L50" class="blob-num js-line-number" data-line-number="50"></td>\n        <td id="file-acode-cpp-LC50" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">main</span>(<span class="pl-k">int</span> argc, <span class="pl-k">char</span>** argv)</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L51" class="blob-num js-line-number" data-line-number="51"></td>\n        <td id="file-acode-cpp-LC51" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L52" class="blob-num js-line-number" data-line-number="52"></td>\n        <td id="file-acode-cpp-LC52" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c"><span class="pl-c">//</span>freopen(&quot;input.txt&quot;, &quot;r&quot;, stdin);</span></td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L53" class="blob-num js-line-number" data-line-number="53"></td>\n        <td id="file-acode-cpp-LC53" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c1">ios::sync_with_stdio</span>(<span class="pl-c1">false</span>);</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L54" class="blob-num js-line-number" data-line-number="54"></td>\n        <td id="file-acode-cpp-LC54" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">while</span>(<span class="pl-c1">true</span>)</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L55" class="blob-num js-line-number" data-line-number="55"></td>\n        <td id="file-acode-cpp-LC55" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L56" class="blob-num js-line-number" data-line-number="56"></td>\n        <td id="file-acode-cpp-LC56" class="blob-code blob-code-inner js-file-line">\t\tcin &gt;&gt; Str;</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L57" class="blob-num js-line-number" data-line-number="57"></td>\n        <td id="file-acode-cpp-LC57" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">if</span>(Str[<span class="pl-c1">0</span>] == <span class="pl-s"><span class="pl-pds">&#39;</span>0<span class="pl-pds">&#39;</span></span>) <span class="pl-k">break</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L58" class="blob-num js-line-number" data-line-number="58"></td>\n        <td id="file-acode-cpp-LC58" class="blob-code blob-code-inner js-file-line">\t\tLeng = <span class="pl-c1">GetLeng</span>(Str);</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L59" class="blob-num js-line-number" data-line-number="59"></td>\n        <td id="file-acode-cpp-LC59" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L60" class="blob-num js-line-number" data-line-number="60"></td>\n        <td id="file-acode-cpp-LC60" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">0</span>; i &lt; Leng; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L61" class="blob-num js-line-number" data-line-number="61"></td>\n        <td id="file-acode-cpp-LC61" class="blob-code blob-code-inner js-file-line">\t\t\tMemo[i] = -<span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L62" class="blob-num js-line-number" data-line-number="62"></td>\n        <td id="file-acode-cpp-LC62" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L63" class="blob-num js-line-number" data-line-number="63"></td>\n        <td id="file-acode-cpp-LC63" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">if</span>(Str[Leng-<span class="pl-c1">1</span>] != <span class="pl-s"><span class="pl-pds">&#39;</span>0<span class="pl-pds">&#39;</span></span>) Memo[Leng-<span class="pl-c1">1</span>] = <span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L64" class="blob-num js-line-number" data-line-number="64"></td>\n        <td id="file-acode-cpp-LC64" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L65" class="blob-num js-line-number" data-line-number="65"></td>\n        <td id="file-acode-cpp-LC65" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c"><span class="pl-c">//</span> Nếu 2 chữ cái đầu tiên có giá trị &lt;= 26 thì tính đến 2 kí tự</span></td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L66" class="blob-num js-line-number" data-line-number="66"></td>\n        <td id="file-acode-cpp-LC66" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c"><span class="pl-c">//</span> Ta có hai cách: ví dụ: 25</span></td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L67" class="blob-num js-line-number" data-line-number="67"></td>\n        <td id="file-acode-cpp-LC67" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c"><span class="pl-c">//</span> Có 2 cách giải mã là: BE hoặc Y</span></td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L68" class="blob-num js-line-number" data-line-number="68"></td>\n        <td id="file-acode-cpp-LC68" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">int</span> t = <span class="pl-c1">Get2Next</span>(Str, Leng-<span class="pl-c1">2</span>);</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L69" class="blob-num js-line-number" data-line-number="69"></td>\n        <td id="file-acode-cpp-LC69" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L70" class="blob-num js-line-number" data-line-number="70"></td>\n        <td id="file-acode-cpp-LC70" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">if</span>(t &gt; <span class="pl-c1">26</span> || t == <span class="pl-c1">10</span> || t == <span class="pl-c1">20</span>) Memo[Leng-<span class="pl-c1">2</span>] = <span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L71" class="blob-num js-line-number" data-line-number="71"></td>\n        <td id="file-acode-cpp-LC71" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">else</span> Memo[Leng-<span class="pl-c1">2</span>] = <span class="pl-c1">2</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L72" class="blob-num js-line-number" data-line-number="72"></td>\n        <td id="file-acode-cpp-LC72" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L73" class="blob-num js-line-number" data-line-number="73"></td>\n        <td id="file-acode-cpp-LC73" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c"><span class="pl-c">//</span> Print the answer to standard output(screen).</span></td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L74" class="blob-num js-line-number" data-line-number="74"></td>\n        <td id="file-acode-cpp-LC74" class="blob-code blob-code-inner js-file-line">\t\tcout &lt;&lt; <span class="pl-c1">Solve</span>(<span class="pl-c1">0</span>) &lt;&lt; endl;</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L75" class="blob-num js-line-number" data-line-number="75"></td>\n        <td id="file-acode-cpp-LC75" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L76" class="blob-num js-line-number" data-line-number="76"></td>\n        <td id="file-acode-cpp-LC76" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">return</span> <span class="pl-c1">0</span>;<span class="pl-c"><span class="pl-c">//</span>Your program should return 0 on normal termination.</span></td>\n      </tr>\n      <tr>\n        <td id="file-acode-cpp-L77" class="blob-num js-line-number" data-line-number="77"></td>\n        <td id="file-acode-cpp-LC77" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/completejavascript/8ab1ede159ccf094647961bf0e942a40/raw/2ccc3a91e53d460d4a83be3a32747d936021508b/ACODE.cpp" style="float:right">view raw</a>\n        <a href="https://gist.github.com/completejavascript/8ab1ede159ccf094647961bf0e942a40#file-acode-cpp">ACODE.cpp</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div>\n</p>\n<p><em>Code by Phạm Văn Lâm.</em></p>',id:"F:/Github/the-algorithms-blog/src/posts/2016-10-29---spoj-com-thuat-toan-bai-acode-alphacode/spoj-com-thuat-toan-bai-acode-alphacode.md absPath of file >>> MarkdownRemark",frontmatter:{title:"SPOJ.COM – Thuật toán bài ACODE - Alphacode",date:"29/10/2016",categories:["spoj","Quy hoạch động - Dynamic programming"],tags:["phạm văn lâm","spoj.com","thuật toán","thuật toán spoj.com","quy hoạch động dynamic programming"]},fields:{slug:"/spoj-com-thuat-toan-bai-acode-alphacode/"},excerpt:'Đề bài: Alice và Bob cần gửi những tin nhắn bí mật cho nhau. Và họ đã thảo luận ra cách để mã hoá chúng:  Alice:  "Chúng ta hãy sử dụng một…',timeToRead:6},prevPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài LKS - Large Knapsack"},fields:{slug:"/spoj-com-thuat-toan-bai-lks-large-knapsack/"}},nextPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài STPAR - Street Parade"},fields:{slug:"/spoj-com-thuat-toan-bai-stpar-street-parade/"}},site:{siteMetadata:{title:"Algorithms Blog",siteUrl:"http://thuattoan.phamvanlam.com",twitterHandle:"@CmpltJavaScript",fbCommentId:"728566430818562"}}},pathContext:{slug:"/spoj-com-thuat-toan-bai-acode-alphacode/",prevSlug:"/spoj-com-thuat-toan-bai-lks-large-knapsack/",nextSlug:"/spoj-com-thuat-toan-bai-stpar-street-parade/"}}}});
//# sourceMappingURL=path---spoj-com-thuat-toan-bai-acode-alphacode-abc7e682aff02cae19d2.js.map