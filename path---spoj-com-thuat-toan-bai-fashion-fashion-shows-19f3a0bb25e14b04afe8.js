webpackJsonp([45950034615774],{808:function(n,s){n.exports={data:{post:{html:'<h2>Đề bài:</h2>\n<p>Một cuộc thi biểu diễn thời trang đánh giá những người tham gia dựa vào độ hot của họ. Có hai chương trình khác nhau được tổ chức, một cho đàn ông và một cho đàn bà. Thời gian của chương trình thứ 3 vẫn chưa được quyết định. </p>\n<p>Bây giờ kết quả của hai chương trình trước đã được công bố. Những người tham gia của hai chương trình đã hẹn nhau, tuy nhiên họ khó khăn trong việc tìm ra đối tác của mình.  Maximum Match dating serive (MMDS) đã giúp họ bằng cách kết nối họ sao cho tối đa hóa được độ hot của họ. </p>\n<p>Nếu một người đàn ông được đánh giá độ hot là x, và người phụ nữ là y thì giá trị của họ sẽ là x*y. Cả hai chương trình, mỗi cái bao gồm N ứng viên. MMDS đã làm xong công việc của họ. Công việc của bạn là tìm ra tổng độ hot của họ.</p>\n<h3>Đầu vào:</h3>\n<p>Dòng đầu tiên là số lượng test case t. Sau đó là các test case. Mỗi cái bao gồm 3 dòng. Dòng đầu tiên là số nguyên N, 1 &#x3C;= N &#x3C;= 1000. Dòng thứ 2 chứa N số nguyên biểu diễn mức điểm của những người đàn ông. Dòng thứ 3 gồm N số nguyên biểu diễn mức điểm của những người phụ nữ. Tất cả độ hot có giá trị từ 0 đến 10.</p>\n<h3>Đầu ra:</h3>\n<p>Với mỗi test case, in ra một số nguyên là tổng độ hot của họ theo cách của MMDS đã làm.</p>\n<h3>Ví dụ:</h3>\n<p><strong>Đầu vào:</strong></p>\n<pre><code>2\n2\n1 1\n3 2\n3\n2 3 2\n1 3 2\n</code></pre>\n<p><strong>Đầu ra:</strong></p>\n<pre><code>5\n15\n</code></pre>\n<p>Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: <a href="http://www.spoj.com/problems/FASHION/">http://www.spoj.com/problems/FASHION/</a></p>\n<h3>Phân tích:</h3>\n<ul>\n<li>\n<p>Bài toán này tôi nhận ra rằng, để kết quả lớn nhất thì ta phải nhân các giá trị lớn nhất với nhau. Từ đó suy ra tôi sẽ phải sắp xếp lại dãy điểm của đàn ông và phụ nữ.</p>\n</li>\n<li>\n<p>Có nhiều cách sắp xếp tuy nhiên cách nhanh và đơn giản nhất là sử dụng Counting Sort (sử dụng mảng đếm tần suất). Bởi lẽ độ hot chỉ có giá trị từ 0 đến 10. </p>\n</li>\n<li>\n<p>Sau đây mời bạn theo dõi cách tôi triển khai <a href="/the-algorithms-blog/category/tham-lam-greedy/">thuật toán tham lam Greedy</a> của mình để giải bài toán này.</p>\n</li>\n</ul>\n<h2>Lời giải:</h2>\n<p>(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)</p>\n<h3>Code C/C++:</h3>\n<p><div id="gist91920710" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-fashion-cpp" class="file">\n    \n\n  <div itemprop="text" class="Box-body p-0 blob-wrapper data type-c ">\n      \n<table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-fashion-cpp-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-fashion-cpp-LC1" class="blob-code blob-code-inner js-file-line">#<span class="pl-k">include</span> <span class="pl-s"><span class="pl-pds">&lt;</span>iostream<span class="pl-pds">&gt;</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-fashion-cpp-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">using</span> <span class="pl-k">namespace</span> <span class="pl-en">std</span><span class="pl-k">;</span></td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-fashion-cpp-LC3" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-fashion-cpp-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">main</span>()</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-fashion-cpp-LC5" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-fashion-cpp-LC6" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c"><span class="pl-c">//</span>freopen(&quot;input.txt&quot;,&quot;r&quot;,stdin);</span></td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-fashion-cpp-LC7" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> Testcase = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-fashion-cpp-LC8" class="blob-code blob-code-inner js-file-line">\tcin &gt;&gt; Testcase;</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-fashion-cpp-LC9" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">for</span>(<span class="pl-k">int</span> tc = <span class="pl-c1">0</span>; tc &lt; Testcase; tc++)</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-fashion-cpp-LC10" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-fashion-cpp-LC11" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">int</span> n = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-fashion-cpp-LC12" class="blob-code blob-code-inner js-file-line">\t\tcin &gt;&gt; n;</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-fashion-cpp-LC13" class="blob-code blob-code-inner js-file-line">\t\t</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L14" class="blob-num js-line-number" data-line-number="14"></td>\n        <td id="file-fashion-cpp-LC14" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c"><span class="pl-c">//</span> Mảng đếm số lượng người có lượng hot i của của nam và nữ</span></td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L15" class="blob-num js-line-number" data-line-number="15"></td>\n        <td id="file-fashion-cpp-LC15" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">int</span> cnt_men[<span class="pl-c1">11</span>], cnt_wen[<span class="pl-c1">11</span>];</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L16" class="blob-num js-line-number" data-line-number="16"></td>\n        <td id="file-fashion-cpp-LC16" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">0</span>; i &lt; <span class="pl-c1">11</span>; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L17" class="blob-num js-line-number" data-line-number="17"></td>\n        <td id="file-fashion-cpp-LC17" class="blob-code blob-code-inner js-file-line">\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L18" class="blob-num js-line-number" data-line-number="18"></td>\n        <td id="file-fashion-cpp-LC18" class="blob-code blob-code-inner js-file-line">\t\t\tcnt_men[i] = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L19" class="blob-num js-line-number" data-line-number="19"></td>\n        <td id="file-fashion-cpp-LC19" class="blob-code blob-code-inner js-file-line">\t\t\tcnt_wen[i] = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L20" class="blob-num js-line-number" data-line-number="20"></td>\n        <td id="file-fashion-cpp-LC20" class="blob-code blob-code-inner js-file-line">\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L21" class="blob-num js-line-number" data-line-number="21"></td>\n        <td id="file-fashion-cpp-LC21" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L22" class="blob-num js-line-number" data-line-number="22"></td>\n        <td id="file-fashion-cpp-LC22" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c"><span class="pl-c">//</span> Nhập đầu vào và đếm số người ứng với độ hot đã cho</span></td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L23" class="blob-num js-line-number" data-line-number="23"></td>\n        <td id="file-fashion-cpp-LC23" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c"><span class="pl-c">//</span> nam</span></td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L24" class="blob-num js-line-number" data-line-number="24"></td>\n        <td id="file-fashion-cpp-LC24" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">0</span>; i &lt; n; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L25" class="blob-num js-line-number" data-line-number="25"></td>\n        <td id="file-fashion-cpp-LC25" class="blob-code blob-code-inner js-file-line">\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L26" class="blob-num js-line-number" data-line-number="26"></td>\n        <td id="file-fashion-cpp-LC26" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">int</span> temp = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L27" class="blob-num js-line-number" data-line-number="27"></td>\n        <td id="file-fashion-cpp-LC27" class="blob-code blob-code-inner js-file-line">\t\t\tcin &gt;&gt; temp;</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L28" class="blob-num js-line-number" data-line-number="28"></td>\n        <td id="file-fashion-cpp-LC28" class="blob-code blob-code-inner js-file-line">\t\t\tcnt_men[temp]++;</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L29" class="blob-num js-line-number" data-line-number="29"></td>\n        <td id="file-fashion-cpp-LC29" class="blob-code blob-code-inner js-file-line">\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L30" class="blob-num js-line-number" data-line-number="30"></td>\n        <td id="file-fashion-cpp-LC30" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c"><span class="pl-c">//</span> nữ</span></td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L31" class="blob-num js-line-number" data-line-number="31"></td>\n        <td id="file-fashion-cpp-LC31" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">0</span>; i &lt; n; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L32" class="blob-num js-line-number" data-line-number="32"></td>\n        <td id="file-fashion-cpp-LC32" class="blob-code blob-code-inner js-file-line">\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L33" class="blob-num js-line-number" data-line-number="33"></td>\n        <td id="file-fashion-cpp-LC33" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">int</span> temp = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L34" class="blob-num js-line-number" data-line-number="34"></td>\n        <td id="file-fashion-cpp-LC34" class="blob-code blob-code-inner js-file-line">\t\t\tcin &gt;&gt; temp;</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L35" class="blob-num js-line-number" data-line-number="35"></td>\n        <td id="file-fashion-cpp-LC35" class="blob-code blob-code-inner js-file-line">\t\t\tcnt_wen[temp]++;</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L36" class="blob-num js-line-number" data-line-number="36"></td>\n        <td id="file-fashion-cpp-LC36" class="blob-code blob-code-inner js-file-line">\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L37" class="blob-num js-line-number" data-line-number="37"></td>\n        <td id="file-fashion-cpp-LC37" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L38" class="blob-num js-line-number" data-line-number="38"></td>\n        <td id="file-fashion-cpp-LC38" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c"><span class="pl-c">//</span> Sắp xếp độ hot cho n người nam dùng counting sort</span></td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L39" class="blob-num js-line-number" data-line-number="39"></td>\n        <td id="file-fashion-cpp-LC39" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">int</span> *men = <span class="pl-k">new</span> <span class="pl-k">int</span>[n];</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L40" class="blob-num js-line-number" data-line-number="40"></td>\n        <td id="file-fashion-cpp-LC40" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">int</span> id_men = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L41" class="blob-num js-line-number" data-line-number="41"></td>\n        <td id="file-fashion-cpp-LC41" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">0</span>; i &lt;= <span class="pl-c1">10</span>; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L42" class="blob-num js-line-number" data-line-number="42"></td>\n        <td id="file-fashion-cpp-LC42" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">for</span>(<span class="pl-k">int</span> j = <span class="pl-c1">0</span>; j &lt; cnt_men[i]; j++)</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L43" class="blob-num js-line-number" data-line-number="43"></td>\n        <td id="file-fashion-cpp-LC43" class="blob-code blob-code-inner js-file-line">\t\t\t\tmen[id_men++] = i;</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L44" class="blob-num js-line-number" data-line-number="44"></td>\n        <td id="file-fashion-cpp-LC44" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L45" class="blob-num js-line-number" data-line-number="45"></td>\n        <td id="file-fashion-cpp-LC45" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c"><span class="pl-c">//</span> Sắp xếp độ hot cho n người nữ dùng counting sort</span></td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L46" class="blob-num js-line-number" data-line-number="46"></td>\n        <td id="file-fashion-cpp-LC46" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">int</span> *wen = <span class="pl-k">new</span> <span class="pl-k">int</span>[n];</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L47" class="blob-num js-line-number" data-line-number="47"></td>\n        <td id="file-fashion-cpp-LC47" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">int</span> id_wen = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L48" class="blob-num js-line-number" data-line-number="48"></td>\n        <td id="file-fashion-cpp-LC48" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">0</span>; i &lt;= <span class="pl-c1">10</span>; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L49" class="blob-num js-line-number" data-line-number="49"></td>\n        <td id="file-fashion-cpp-LC49" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">for</span>(<span class="pl-k">int</span> j = <span class="pl-c1">0</span>; j &lt; cnt_wen[i]; j++)</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L50" class="blob-num js-line-number" data-line-number="50"></td>\n        <td id="file-fashion-cpp-LC50" class="blob-code blob-code-inner js-file-line">\t\t\t\twen[id_wen++] = i;</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L51" class="blob-num js-line-number" data-line-number="51"></td>\n        <td id="file-fashion-cpp-LC51" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L52" class="blob-num js-line-number" data-line-number="52"></td>\n        <td id="file-fashion-cpp-LC52" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c"><span class="pl-c">//</span> Tính độ hot tổng</span></td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L53" class="blob-num js-line-number" data-line-number="53"></td>\n        <td id="file-fashion-cpp-LC53" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">int</span> sum = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L54" class="blob-num js-line-number" data-line-number="54"></td>\n        <td id="file-fashion-cpp-LC54" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">0</span>; i &lt; n; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L55" class="blob-num js-line-number" data-line-number="55"></td>\n        <td id="file-fashion-cpp-LC55" class="blob-code blob-code-inner js-file-line">\t\t\tsum += men[i] * wen[i];</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L56" class="blob-num js-line-number" data-line-number="56"></td>\n        <td id="file-fashion-cpp-LC56" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L57" class="blob-num js-line-number" data-line-number="57"></td>\n        <td id="file-fashion-cpp-LC57" class="blob-code blob-code-inner js-file-line">\t\tcout &lt;&lt; sum &lt;&lt; endl;</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L58" class="blob-num js-line-number" data-line-number="58"></td>\n        <td id="file-fashion-cpp-LC58" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">delete[]</span> wen;</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L59" class="blob-num js-line-number" data-line-number="59"></td>\n        <td id="file-fashion-cpp-LC59" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">delete[]</span> men;</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L60" class="blob-num js-line-number" data-line-number="60"></td>\n        <td id="file-fashion-cpp-LC60" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L61" class="blob-num js-line-number" data-line-number="61"></td>\n        <td id="file-fashion-cpp-LC61" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">return</span> <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-fashion-cpp-L62" class="blob-num js-line-number" data-line-number="62"></td>\n        <td id="file-fashion-cpp-LC62" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/completejavascript/74361998f50239aea489018abc6f190a/raw/88d9398a8be34c504e27cb4b3bf01f7242e3ed41/FASHION.cpp" style="float:right">view raw</a>\n        <a href="https://gist.github.com/completejavascript/74361998f50239aea489018abc6f190a#file-fashion-cpp">FASHION.cpp</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div></p>\n<p><em>Code by Phạm Văn Lâm.</em></p>',id:"f:/Github/the-algorithms-blog/src/posts/2016-12-03---spoj-com-thuat-toan-bai-fashion-fashion-shows/index.md absPath of file >>> MarkdownRemark",frontmatter:{title:"SPOJ.COM – Thuật toán bài FASHION - Fashion Shows",date:"03/12/2016",categories:["spoj","Tham lam - Greedy"],tags:["phạm văn lâm","spoj.com","thuật toán","thuật toán spoj.com","tham lam greedy"]},fields:{slug:"/spoj-com-thuat-toan-bai-fashion-fashion-shows/"},excerpt:"Đề bài: Một cuộc thi biểu diễn thời trang đánh giá những người tham gia dựa vào độ hot của họ. Có hai chương trình khác nhau được tổ chức,…",timeToRead:5},prevPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài FCTRL - Factorial"},fields:{slug:"/spoj-com-thuat-toan-bai-fctrl-factorial/"}},nextPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài FACEFRND - Friends of Friends"},fields:{slug:"/spoj-com-thuat-toan-bai-facefrnd-friends-of-friends/"}},site:{siteMetadata:{title:"Algorithms Blog",siteUrl:"https://thuattoan.phamvanlam.com",twitterHandle:"@CmpltJavaScript",fbCommentId:"728566430818562",fbId:"100013577851883"}}},pathContext:{slug:"/spoj-com-thuat-toan-bai-fashion-fashion-shows/",prevSlug:"/spoj-com-thuat-toan-bai-fctrl-factorial/",nextSlug:"/spoj-com-thuat-toan-bai-facefrnd-friends-of-friends/"}}}});
//# sourceMappingURL=path---spoj-com-thuat-toan-bai-fashion-fashion-shows-19f3a0bb25e14b04afe8.js.map