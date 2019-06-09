webpackJsonp([0x95015e04a68f],{779:function(n,s){n.exports={data:{post:{html:'<h2>Đề bài:</h2>\n<p>Công ty "21st Century Fruits" đã sáng tạo ra những loại nước hoa quả mới bằng cách chuyển gen từ một loại sang một loại khác. Hầu hết các lần là thất bại Nhưng đôi khi một loại nước hoa quả mới sẽ được tạo ra bằng cách trộn chúng lại với nhau. </p>\n<p>Một chủ đề lớn được đưa ra thảo luận đó là "Phát minh mới này sẽ được gọi là gì?" Kết hợp giữa apple và pear sẽ được gọi là apple-pear. Dĩ nhiên, gọi như vậy nghe không hay ho lắm. Ông chủ công ty mới ra quyết định đó là sử dụng một chuỗi ngắn nhất chứa cả tên của cả hai loại. Ví dụ: "applear" bao gồm "apple" và "pear" (APPLEar và apPlEAR), và không có một xâu nào ngắn hơn thoả mãn tính chất trên. </p>\n<p>Tổ hợp của "cranberry" và "boysenberry" là "boysecranberry" hay "craboysenberry" Nhiệm vụ của bạn là viết ra một chương trình để tính ra tên có độ dài nhỏ nhất là tổ hợp của 2 loại quả ban đầu.</p>\n<h3>Đầu vào:</h3>\n<p>Mỗi dòng bao gồm 2 xâu là tên của 2 loại quả ban đầu. Tất cả tên có độ dài tối đa là 100 và chỉ chứa kí tự là chữ cái. Kết thúc đầu vào là kí hiệu kết thúc file.</p>\n<h3>Đầu ra:</h3>\n<p>Mỗi test case, in ra tên nhỏ nhất của kết quả trên một dòng. Nếu có nhiều kết quả thì chỉ cần in ra một cái bất kỳ.</p>\n<h3>Ví dụ:</h3>\n<p><strong>Đầu vào:</strong></p>\n<pre><code>apple peach\nananas banana\npear peach\n</code></pre>\n<p><strong>Đầu ra:</strong></p>\n<pre><code>appleach\nbananas\npearch\n</code></pre>\n<p><em>Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: <a href="http://www.spoj.com/problems/ADFRUITS/">http://www.spoj.com/problems/ADFRUITS/</a></em></p>\n<h3>Phân tích:</h3>\n<ul>\n<li>\n<p>Ở đây tôi sử dụng <a href="/the-algorithms-blog/category/quy-hoach-dong-dynamic-programming/">thuật toán quy hoạch động Dynamic programming</a> để tìm ra dãy con chung dài nhất của hai cái tên.</p>\n</li>\n<li>\n<p>Sau khi đã có dãy con chung dài nhất của của hai dãy rồi thì tôi chỉ việc in ra kết quả theo thứ tự thỏa mãn bài toán.</p>\n</li>\n</ul>\n<h2><strong>Lời giải:</strong></h2>\n<p>(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu.  Nên rất mong nhận được sự chia sẻ của các bạn.)</p>\n<h3><strong>Code C/ C++:</strong></h3>\n<p><div id="gist91918608" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-adfruits-cpp" class="file">\n    \n\n  <div itemprop="text" class="Box-body p-0 blob-wrapper data type-c ">\n      \n<table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-adfruits-cpp-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-adfruits-cpp-LC1" class="blob-code blob-code-inner js-file-line">#<span class="pl-k">include</span> <span class="pl-s"><span class="pl-pds">&lt;</span>iostream<span class="pl-pds">&gt;</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-adfruits-cpp-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">using</span> <span class="pl-k">namespace</span> <span class="pl-en">std</span><span class="pl-k">;</span></td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-adfruits-cpp-LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-k">int</span> MAX = <span class="pl-c1">105</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-adfruits-cpp-LC4" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-adfruits-cpp-LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-k">char</span> S1[MAX], S2[MAX];</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-adfruits-cpp-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> Leng1, Leng2;</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-adfruits-cpp-LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> L[MAX][MAX];            <span class="pl-c"><span class="pl-c">//</span> L[i][j] là độ dài LCS của S1[1..i] và S2[1...j]</span></td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-adfruits-cpp-LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-k">char</span> Common[MAX][MAX][MAX]; <span class="pl-c"><span class="pl-c">//</span> Lưu thành phần chung dài nhất với L[i][j] trên.</span></td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-adfruits-cpp-LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-k">char</span> Result[<span class="pl-c1">2</span>*MAX];         <span class="pl-c"><span class="pl-c">//</span> Lưu kết quả</span></td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-adfruits-cpp-LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> Leng;                   <span class="pl-c"><span class="pl-c">//</span> Độ dài mảng kết quả</span></td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-adfruits-cpp-LC11" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-adfruits-cpp-LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">/*</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-adfruits-cpp-LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* Trả về độ dài xâu s</span></td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L14" class="blob-num js-line-number" data-line-number="14"></td>\n        <td id="file-adfruits-cpp-LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">*/</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L15" class="blob-num js-line-number" data-line-number="15"></td>\n        <td id="file-adfruits-cpp-LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">GetLeng</span>(<span class="pl-k">char</span> *s)</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L16" class="blob-num js-line-number" data-line-number="16"></td>\n        <td id="file-adfruits-cpp-LC16" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L17" class="blob-num js-line-number" data-line-number="17"></td>\n        <td id="file-adfruits-cpp-LC17" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> leng = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L18" class="blob-num js-line-number" data-line-number="18"></td>\n        <td id="file-adfruits-cpp-LC18" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">while</span>(s[leng] != <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\\0</span><span class="pl-pds">&#39;</span></span>) leng++;</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L19" class="blob-num js-line-number" data-line-number="19"></td>\n        <td id="file-adfruits-cpp-LC19" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">return</span> leng;</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L20" class="blob-num js-line-number" data-line-number="20"></td>\n        <td id="file-adfruits-cpp-LC20" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L21" class="blob-num js-line-number" data-line-number="21"></td>\n        <td id="file-adfruits-cpp-LC21" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L22" class="blob-num js-line-number" data-line-number="22"></td>\n        <td id="file-adfruits-cpp-LC22" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">/*</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L23" class="blob-num js-line-number" data-line-number="23"></td>\n        <td id="file-adfruits-cpp-LC23" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* Sao chép xâu src với độ dài leng vào xâu dst</span></td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L24" class="blob-num js-line-number" data-line-number="24"></td>\n        <td id="file-adfruits-cpp-LC24" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">*/</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L25" class="blob-num js-line-number" data-line-number="25"></td>\n        <td id="file-adfruits-cpp-LC25" class="blob-code blob-code-inner js-file-line"><span class="pl-k">void</span> <span class="pl-en">CpyStr</span>(<span class="pl-k">char</span> *dst, <span class="pl-k">char</span> *src, <span class="pl-k">int</span> leng)</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L26" class="blob-num js-line-number" data-line-number="26"></td>\n        <td id="file-adfruits-cpp-LC26" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L27" class="blob-num js-line-number" data-line-number="27"></td>\n        <td id="file-adfruits-cpp-LC27" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">0</span>; i &lt; leng; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L28" class="blob-num js-line-number" data-line-number="28"></td>\n        <td id="file-adfruits-cpp-LC28" class="blob-code blob-code-inner js-file-line">\t\tdst[i] = src[i];</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L29" class="blob-num js-line-number" data-line-number="29"></td>\n        <td id="file-adfruits-cpp-LC29" class="blob-code blob-code-inner js-file-line">\tdst[leng] = <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\\0</span><span class="pl-pds">&#39;</span></span>;</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L30" class="blob-num js-line-number" data-line-number="30"></td>\n        <td id="file-adfruits-cpp-LC30" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L31" class="blob-num js-line-number" data-line-number="31"></td>\n        <td id="file-adfruits-cpp-LC31" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L32" class="blob-num js-line-number" data-line-number="32"></td>\n        <td id="file-adfruits-cpp-LC32" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">main</span>(<span class="pl-k">int</span> argc, <span class="pl-k">char</span>** argv)</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L33" class="blob-num js-line-number" data-line-number="33"></td>\n        <td id="file-adfruits-cpp-LC33" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L34" class="blob-num js-line-number" data-line-number="34"></td>\n        <td id="file-adfruits-cpp-LC34" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c1">ios::sync_with_stdio</span>(<span class="pl-c1">false</span>);</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L35" class="blob-num js-line-number" data-line-number="35"></td>\n        <td id="file-adfruits-cpp-LC35" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c"><span class="pl-c">//</span>freopen(&quot;input.txt&quot;, &quot;r&quot;, stdin);</span></td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L36" class="blob-num js-line-number" data-line-number="36"></td>\n        <td id="file-adfruits-cpp-LC36" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L37" class="blob-num js-line-number" data-line-number="37"></td>\n        <td id="file-adfruits-cpp-LC37" class="blob-code blob-code-inner js-file-line">\tcin &gt;&gt; S1;</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L38" class="blob-num js-line-number" data-line-number="38"></td>\n        <td id="file-adfruits-cpp-LC38" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">while</span>(<span class="pl-c1">true</span>)</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L39" class="blob-num js-line-number" data-line-number="39"></td>\n        <td id="file-adfruits-cpp-LC39" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L40" class="blob-num js-line-number" data-line-number="40"></td>\n        <td id="file-adfruits-cpp-LC40" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c"><span class="pl-c">//</span> Nhập xâu S1, S2 và tính độ dài của nó</span></td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L41" class="blob-num js-line-number" data-line-number="41"></td>\n        <td id="file-adfruits-cpp-LC41" class="blob-code blob-code-inner js-file-line">\t\tcin &gt;&gt; S2;</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L42" class="blob-num js-line-number" data-line-number="42"></td>\n        <td id="file-adfruits-cpp-LC42" class="blob-code blob-code-inner js-file-line">\t\tLeng1 = <span class="pl-c1">GetLeng</span>(S1);</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L43" class="blob-num js-line-number" data-line-number="43"></td>\n        <td id="file-adfruits-cpp-LC43" class="blob-code blob-code-inner js-file-line">\t\tLeng2 = <span class="pl-c1">GetLeng</span>(S2);</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L44" class="blob-num js-line-number" data-line-number="44"></td>\n        <td id="file-adfruits-cpp-LC44" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L45" class="blob-num js-line-number" data-line-number="45"></td>\n        <td id="file-adfruits-cpp-LC45" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c"><span class="pl-c">//</span> Trường hợp cơ sở </span></td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L46" class="blob-num js-line-number" data-line-number="46"></td>\n        <td id="file-adfruits-cpp-LC46" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">0</span>; i &lt;= Leng1; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L47" class="blob-num js-line-number" data-line-number="47"></td>\n        <td id="file-adfruits-cpp-LC47" class="blob-code blob-code-inner js-file-line">\t\t\tL[i][<span class="pl-c1">0</span>] = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L48" class="blob-num js-line-number" data-line-number="48"></td>\n        <td id="file-adfruits-cpp-LC48" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">for</span>(<span class="pl-k">int</span> j = <span class="pl-c1">0</span>; j &lt;= Leng2; j++)</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L49" class="blob-num js-line-number" data-line-number="49"></td>\n        <td id="file-adfruits-cpp-LC49" class="blob-code blob-code-inner js-file-line">\t\t\tL[<span class="pl-c1">0</span>][j] = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L50" class="blob-num js-line-number" data-line-number="50"></td>\n        <td id="file-adfruits-cpp-LC50" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L51" class="blob-num js-line-number" data-line-number="51"></td>\n        <td id="file-adfruits-cpp-LC51" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">1</span>; i &lt;= Leng1; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L52" class="blob-num js-line-number" data-line-number="52"></td>\n        <td id="file-adfruits-cpp-LC52" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">for</span>(<span class="pl-k">int</span> j = <span class="pl-c1">1</span>; j &lt;= Leng2; j++)</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L53" class="blob-num js-line-number" data-line-number="53"></td>\n        <td id="file-adfruits-cpp-LC53" class="blob-code blob-code-inner js-file-line">\t\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L54" class="blob-num js-line-number" data-line-number="54"></td>\n        <td id="file-adfruits-cpp-LC54" class="blob-code blob-code-inner js-file-line">\t\t\t\t<span class="pl-c"><span class="pl-c">//</span> Chỉ số mảng char* tính từ 0</span></td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L55" class="blob-num js-line-number" data-line-number="55"></td>\n        <td id="file-adfruits-cpp-LC55" class="blob-code blob-code-inner js-file-line">\t\t\t\t<span class="pl-c"><span class="pl-c">//</span> Nếu hai kí tự đang xét giống nhau</span></td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L56" class="blob-num js-line-number" data-line-number="56"></td>\n        <td id="file-adfruits-cpp-LC56" class="blob-code blob-code-inner js-file-line">\t\t\t\t<span class="pl-c"><span class="pl-c">//</span> thì cho vào dãy chung tăng dài nhất</span></td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L57" class="blob-num js-line-number" data-line-number="57"></td>\n        <td id="file-adfruits-cpp-LC57" class="blob-code blob-code-inner js-file-line">\t\t\t\t<span class="pl-k">if</span>(S1[i-<span class="pl-c1">1</span>] == S2[j-<span class="pl-c1">1</span>])</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L58" class="blob-num js-line-number" data-line-number="58"></td>\n        <td id="file-adfruits-cpp-LC58" class="blob-code blob-code-inner js-file-line">\t\t\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L59" class="blob-num js-line-number" data-line-number="59"></td>\n        <td id="file-adfruits-cpp-LC59" class="blob-code blob-code-inner js-file-line">\t\t\t\t\tL[i][j] = <span class="pl-c1">1</span> + L[i-<span class="pl-c1">1</span>][j-<span class="pl-c1">1</span>];</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L60" class="blob-num js-line-number" data-line-number="60"></td>\n        <td id="file-adfruits-cpp-LC60" class="blob-code blob-code-inner js-file-line">\t\t\t\t\t<span class="pl-c1">CpyStr</span>(Common[i][j], Common[i-<span class="pl-c1">1</span>][j-<span class="pl-c1">1</span>], L[i-<span class="pl-c1">1</span>][j-<span class="pl-c1">1</span>]);</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L61" class="blob-num js-line-number" data-line-number="61"></td>\n        <td id="file-adfruits-cpp-LC61" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L62" class="blob-num js-line-number" data-line-number="62"></td>\n        <td id="file-adfruits-cpp-LC62" class="blob-code blob-code-inner js-file-line">\t\t\t\t\tCommon[i][j][L[i][j] - <span class="pl-c1">1</span>] = S1[i - <span class="pl-c1">1</span>];</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L63" class="blob-num js-line-number" data-line-number="63"></td>\n        <td id="file-adfruits-cpp-LC63" class="blob-code blob-code-inner js-file-line">\t\t\t\t\tCommon[i][j][L[i][j]] = <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\\0</span><span class="pl-pds">&#39;</span></span>;</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L64" class="blob-num js-line-number" data-line-number="64"></td>\n        <td id="file-adfruits-cpp-LC64" class="blob-code blob-code-inner js-file-line">\t\t\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L65" class="blob-num js-line-number" data-line-number="65"></td>\n        <td id="file-adfruits-cpp-LC65" class="blob-code blob-code-inner js-file-line">\t\t\t\t<span class="pl-k">else</span> <span class="pl-c"><span class="pl-c">//</span> S1[i-1] != S2[j-1] thì giữ lại dãy nào có độ dài lớn hơn</span></td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L66" class="blob-num js-line-number" data-line-number="66"></td>\n        <td id="file-adfruits-cpp-LC66" class="blob-code blob-code-inner js-file-line">\t\t\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L67" class="blob-num js-line-number" data-line-number="67"></td>\n        <td id="file-adfruits-cpp-LC67" class="blob-code blob-code-inner js-file-line">\t\t\t\t\t<span class="pl-c"><span class="pl-c">//</span> Chọn thành phần lớn hơn</span></td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L68" class="blob-num js-line-number" data-line-number="68"></td>\n        <td id="file-adfruits-cpp-LC68" class="blob-code blob-code-inner js-file-line">\t\t\t\t\t<span class="pl-k">if</span>(L[i-<span class="pl-c1">1</span>][j] &gt; L[i][j-<span class="pl-c1">1</span>])</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L69" class="blob-num js-line-number" data-line-number="69"></td>\n        <td id="file-adfruits-cpp-LC69" class="blob-code blob-code-inner js-file-line">\t\t\t\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L70" class="blob-num js-line-number" data-line-number="70"></td>\n        <td id="file-adfruits-cpp-LC70" class="blob-code blob-code-inner js-file-line">\t\t\t\t\t\tL[i][j] = L[i-<span class="pl-c1">1</span>][j];</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L71" class="blob-num js-line-number" data-line-number="71"></td>\n        <td id="file-adfruits-cpp-LC71" class="blob-code blob-code-inner js-file-line">\t\t\t\t\t\t<span class="pl-c1">CpyStr</span>(Common[i][j], Common[i-<span class="pl-c1">1</span>][j], L[i-<span class="pl-c1">1</span>][j]);</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L72" class="blob-num js-line-number" data-line-number="72"></td>\n        <td id="file-adfruits-cpp-LC72" class="blob-code blob-code-inner js-file-line">\t\t\t\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L73" class="blob-num js-line-number" data-line-number="73"></td>\n        <td id="file-adfruits-cpp-LC73" class="blob-code blob-code-inner js-file-line">\t\t\t\t\t<span class="pl-k">else</span></td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L74" class="blob-num js-line-number" data-line-number="74"></td>\n        <td id="file-adfruits-cpp-LC74" class="blob-code blob-code-inner js-file-line">\t\t\t\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L75" class="blob-num js-line-number" data-line-number="75"></td>\n        <td id="file-adfruits-cpp-LC75" class="blob-code blob-code-inner js-file-line">\t\t\t\t\t\tL[i][j] = L[i][j-<span class="pl-c1">1</span>];</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L76" class="blob-num js-line-number" data-line-number="76"></td>\n        <td id="file-adfruits-cpp-LC76" class="blob-code blob-code-inner js-file-line">\t\t\t\t\t\t<span class="pl-c1">CpyStr</span>(Common[i][j], Common[i][j-<span class="pl-c1">1</span>], L[i][j-<span class="pl-c1">1</span>]);</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L77" class="blob-num js-line-number" data-line-number="77"></td>\n        <td id="file-adfruits-cpp-LC77" class="blob-code blob-code-inner js-file-line">\t\t\t\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L78" class="blob-num js-line-number" data-line-number="78"></td>\n        <td id="file-adfruits-cpp-LC78" class="blob-code blob-code-inner js-file-line">\t\t\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L79" class="blob-num js-line-number" data-line-number="79"></td>\n        <td id="file-adfruits-cpp-LC79" class="blob-code blob-code-inner js-file-line">\t\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L80" class="blob-num js-line-number" data-line-number="80"></td>\n        <td id="file-adfruits-cpp-LC80" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L81" class="blob-num js-line-number" data-line-number="81"></td>\n        <td id="file-adfruits-cpp-LC81" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> In kết quả</span></td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L82" class="blob-num js-line-number" data-line-number="82"></td>\n        <td id="file-adfruits-cpp-LC82" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">int</span> i1 = <span class="pl-c1">0</span>;\t<span class="pl-c"><span class="pl-c">//</span> Con trỏ vào đầu s1</span></td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L83" class="blob-num js-line-number" data-line-number="83"></td>\n        <td id="file-adfruits-cpp-LC83" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">int</span> i2 = <span class="pl-c1">0</span>; <span class="pl-c"><span class="pl-c">//</span> Con trỏ vào đầu s2</span></td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L84" class="blob-num js-line-number" data-line-number="84"></td>\n        <td id="file-adfruits-cpp-LC84" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">int</span> c  = <span class="pl-c1">0</span>; <span class="pl-c"><span class="pl-c">//</span> Con trỏ vào đầu xâu common[Leng1][Leng2]</span></td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L85" class="blob-num js-line-number" data-line-number="85"></td>\n        <td id="file-adfruits-cpp-LC85" class="blob-code blob-code-inner js-file-line">\t\t</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L86" class="blob-num js-line-number" data-line-number="86"></td>\n        <td id="file-adfruits-cpp-LC86" class="blob-code blob-code-inner js-file-line">\t\tLeng = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L87" class="blob-num js-line-number" data-line-number="87"></td>\n        <td id="file-adfruits-cpp-LC87" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">while</span>(Common[Leng1][Leng2][c] != <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\\0</span><span class="pl-pds">&#39;</span></span>)</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L88" class="blob-num js-line-number" data-line-number="88"></td>\n        <td id="file-adfruits-cpp-LC88" class="blob-code blob-code-inner js-file-line">\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L89" class="blob-num js-line-number" data-line-number="89"></td>\n        <td id="file-adfruits-cpp-LC89" class="blob-code blob-code-inner js-file-line">\t\t    <span class="pl-c"><span class="pl-c">//</span> In ra thành phần ở S1 cho đến thành phần chung</span></td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L90" class="blob-num js-line-number" data-line-number="90"></td>\n        <td id="file-adfruits-cpp-LC90" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">while</span>(S1[i1] != Common[Leng1][Leng2][c]) </td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L91" class="blob-num js-line-number" data-line-number="91"></td>\n        <td id="file-adfruits-cpp-LC91" class="blob-code blob-code-inner js-file-line">\t\t\t\tResult[Leng++] = S1[i1++];</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L92" class="blob-num js-line-number" data-line-number="92"></td>\n        <td id="file-adfruits-cpp-LC92" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L93" class="blob-num js-line-number" data-line-number="93"></td>\n        <td id="file-adfruits-cpp-LC93" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> In ra thành phần sở S2 cho đến thành phần chung</span></td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L94" class="blob-num js-line-number" data-line-number="94"></td>\n        <td id="file-adfruits-cpp-LC94" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">while</span> (S2[i2] != Common[Leng1][Leng2][c])</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L95" class="blob-num js-line-number" data-line-number="95"></td>\n        <td id="file-adfruits-cpp-LC95" class="blob-code blob-code-inner js-file-line">\t\t\t\tResult[Leng++] = S2[i2++];</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L96" class="blob-num js-line-number" data-line-number="96"></td>\n        <td id="file-adfruits-cpp-LC96" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L97" class="blob-num js-line-number" data-line-number="97"></td>\n        <td id="file-adfruits-cpp-LC97" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> In ra thành phần chung, rồi tăng con trỏ lên và tiếp tục</span></td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L98" class="blob-num js-line-number" data-line-number="98"></td>\n        <td id="file-adfruits-cpp-LC98" class="blob-code blob-code-inner js-file-line">\t\t\tResult[Leng++] = Common[Leng1][Leng2][c];</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L99" class="blob-num js-line-number" data-line-number="99"></td>\n        <td id="file-adfruits-cpp-LC99" class="blob-code blob-code-inner js-file-line">\t\t\tc  += <span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L100" class="blob-num js-line-number" data-line-number="100"></td>\n        <td id="file-adfruits-cpp-LC100" class="blob-code blob-code-inner js-file-line">\t\t\ti1 += <span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L101" class="blob-num js-line-number" data-line-number="101"></td>\n        <td id="file-adfruits-cpp-LC101" class="blob-code blob-code-inner js-file-line">\t\t\ti2 += <span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L102" class="blob-num js-line-number" data-line-number="102"></td>\n        <td id="file-adfruits-cpp-LC102" class="blob-code blob-code-inner js-file-line">\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L103" class="blob-num js-line-number" data-line-number="103"></td>\n        <td id="file-adfruits-cpp-LC103" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L104" class="blob-num js-line-number" data-line-number="104"></td>\n        <td id="file-adfruits-cpp-LC104" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> Sau khi in hết thành phần chung rồi, thì in nốt S1 rồi S2</span></td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L105" class="blob-num js-line-number" data-line-number="105"></td>\n        <td id="file-adfruits-cpp-LC105" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = i1; i &lt; Leng1; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L106" class="blob-num js-line-number" data-line-number="106"></td>\n        <td id="file-adfruits-cpp-LC106" class="blob-code blob-code-inner js-file-line">\t\t\tResult[Leng++] = S1[i];</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L107" class="blob-num js-line-number" data-line-number="107"></td>\n        <td id="file-adfruits-cpp-LC107" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = i2; i &lt; Leng2; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L108" class="blob-num js-line-number" data-line-number="108"></td>\n        <td id="file-adfruits-cpp-LC108" class="blob-code blob-code-inner js-file-line">\t\t\tResult[Leng++] = S2[i];</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L109" class="blob-num js-line-number" data-line-number="109"></td>\n        <td id="file-adfruits-cpp-LC109" class="blob-code blob-code-inner js-file-line">\t\tResult[Leng] = <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\\0</span><span class="pl-pds">&#39;</span></span>;</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L110" class="blob-num js-line-number" data-line-number="110"></td>\n        <td id="file-adfruits-cpp-LC110" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L111" class="blob-num js-line-number" data-line-number="111"></td>\n        <td id="file-adfruits-cpp-LC111" class="blob-code blob-code-inner js-file-line">\t\tcout &lt;&lt; Result &lt;&lt; endl;</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L112" class="blob-num js-line-number" data-line-number="112"></td>\n        <td id="file-adfruits-cpp-LC112" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">if</span>(!(cin &gt;&gt; S1)) <span class="pl-k">break</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L113" class="blob-num js-line-number" data-line-number="113"></td>\n        <td id="file-adfruits-cpp-LC113" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L114" class="blob-num js-line-number" data-line-number="114"></td>\n        <td id="file-adfruits-cpp-LC114" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">return</span> <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-adfruits-cpp-L115" class="blob-num js-line-number" data-line-number="115"></td>\n        <td id="file-adfruits-cpp-LC115" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/completejavascript/4b19ac496598912289f19445e46950e9/raw/d941a492418079319857d8858b1702fbbfa8d3e3/ADFRUITS.cpp" style="float:right">view raw</a>\n        <a href="https://gist.github.com/completejavascript/4b19ac496598912289f19445e46950e9#file-adfruits-cpp">ADFRUITS.cpp</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div></p>\n<p><em>Code by Phạm Văn Lâm.</em></p>',
id:"f:/Github/the-algorithms-blog/src/posts/2016-10-29---spoj-com-thuat-toan-bai-adfruits-advanced-fruits/index.md absPath of file >>> MarkdownRemark",frontmatter:{title:"SPOJ.COM – Thuật toán bài ADFRUITS - Advanced Fruits",date:"29/10/2016",categories:["spoj","Quy hoạch động - Dynamic programming"],tags:["phạm văn lâm","spoj.com","thuật toán","thuật toán spoj.com","quy hoạch động dynamic programming","dãy con chung dài nhất LCS"]},fields:{slug:"/spoj-com-thuat-toan-bai-adfruits-advanced-fruits/"},excerpt:'Đề bài: Công ty "21st Century Fruits" đã sáng tạo ra những loại nước hoa quả mới bằng cách chuyển gen từ một loại sang một loại khác. Hầu…',timeToRead:7},prevPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài DCEPC501 - Save Thy Toys"},fields:{slug:"/spoj-com-thuat-toan-bai-dcepc501-save-thy-toys/"}},nextPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài LKS - Large Knapsack"},fields:{slug:"/spoj-com-thuat-toan-bai-lks-large-knapsack/"}},site:{siteMetadata:{title:"Algorithms Blog",siteUrl:"https://thuattoan.phamvanlam.com",twitterHandle:"@CmpltJavaScript",fbCommentId:"728566430818562",fbId:"100013577851883"}}},pathContext:{slug:"/spoj-com-thuat-toan-bai-adfruits-advanced-fruits/",prevSlug:"/spoj-com-thuat-toan-bai-dcepc501-save-thy-toys/",nextSlug:"/spoj-com-thuat-toan-bai-lks-large-knapsack/"}}}});
//# sourceMappingURL=path---spoj-com-thuat-toan-bai-adfruits-advanced-fruits-7777c4213f95480d5762.js.map