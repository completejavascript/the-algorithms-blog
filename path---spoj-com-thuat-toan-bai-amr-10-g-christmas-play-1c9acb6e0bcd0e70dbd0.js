webpackJsonp([0x9557adcf5d43],{769:function(n,l){n.exports={data:{post:{html:'<h2><strong>Đề bài:</strong></h2>\n<p>Lớp mẫu giáo của con tôi đang chuẩn bị một vở kịch cho Noel (hy vọng rằng con trai tôi sẽ giữ vai trò đội trưởng). Những đứa trẻ rất là hào hứng, tuy nhiên giáo viên của chúng thì lại rất vất vả. Cô ấy phải chuẩn bị phục trang cho K người lính. Cô ấy muốn mua tất cả trang phục với cùng 1 kích cỡ. Độ dài của chúng có thể thay đổi một lượng nhỏ sau này bởi cha mẹ của những đứa trẻ. Vì vậy, cô ấy đã lấy chiều cao của tất cả những đứa trẻ. Bạn hãy giúp cô ấy chọn ra K đứa trẻ trong N đứa để đóng vai binh lính, sao cho chiều cao giữa đứa cao nhất và đứa thấp nhất là nhỏ nhất, nhờ đó mà sự thay đổi là ít nhất. Và nói với cô ấy sự chênh lệnh nhỏ nhất đó.</p>\n<h2><strong>Đầu vào:</strong></h2>\n<p>Dòng đầu tiên bao gồm số lượng test case T. Mỗi test case bao gồm 2 dòng. Dòng đầu tiên của mỗi test case bao gồm 2 số nguyên N và K. Dòng thứ hai bao gồm N số nguyên là chiều cao của N đứa trẻ.</p>\n<h2><strong>Đầu ra:</strong></h2>\n<p>Với mỗi test case, in ra kết quả tương ứng. </p>\n<p><strong>Ràng buộc:</strong> </p>\n<p>T &#x3C;= 30 </p>\n<p>1 &#x3C;= K &#x3C;= N &#x3C;= 20000 </p>\n<p>1 &#x3C;= chiều cao &#x3C;= 1000000000</p>\n<h2><strong>Ví dụ</strong></h2>\n<p><strong>Đầu vào:</strong> </p>\n<p>3 </p>\n<p>3 1 </p>\n<p>2 5 4 </p>\n<p>3 2 </p>\n<p>5 2 4 </p>\n<p>3 3 </p>\n<p>2 5 4 </p>\n<p><strong>Đầu ra:</strong> </p>\n<p>0 </p>\n<p>1 </p>\n<p>3 </p>\n<p><strong>Giải thích:</strong> </p>\n<ul>\n<li>\n<p>Test case số 1: giáo viên chỉ cần chọn 1 người làm binh lính, vì vậy, cô ấy có thể chọn bất kì ai làm binh lính. Do đó, độ chênh lệnh chiều cao cần tìm là 0 </p>\n</li>\n<li>\n<p>Test case số 2: giáo viên có thể chọn hai đứa trẻ có chiều cao là 4 và 5. Khi đó kết quả là 1 </p>\n</li>\n<li>\n<p>Test case số 3: giáo viên bắt buộc phải chọn hết, nên đáp án là 5 – 2 = 3 </p>\n</li>\n</ul>\n<p><em>Các bạn có thể tham khảo đề bài tiếng anh và submit tại đây: <a href="http://www.spoj.com/problems/AMR10G/">http://www.spoj.com/problems/AMR10G/</a></em></p>\n<h2><strong>Phân tích:</strong></h2>\n<ul>\n<li>\n<p>Đầu tiên, nếu phải chọn 1 đứa trẻ thì kết quả là 0 </p>\n</li>\n<li>\n<p>Nếu phải trọn K > 1 đứa trẻ, ta sẽ sắp xếp dãy chiều cao của chúng theo thứ tự tăng dần, hoặc giảm dần Sau đó, ta chỉ cần kiểm tra độ chênh lệnh chiều cao giữa đứa trẻ thứ i và i + K – 1. Tìm ra trường hợp nào có độ chênh lệnh nhỏ nhất là kết quả cần tìm</p>\n</li>\n</ul>\n<h1><strong>Lời giải:</strong></h1>\n<p>(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)</p>\n<h2><strong>Code C/C++:</strong></h2>\n<p><div id="gist91917055" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-amr10g-cpp" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-c">\n      <table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-amr10g-cpp-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-amr10g-cpp-LC1" class="blob-code blob-code-inner js-file-line">#<span class="pl-k">include</span><span class="pl-s"><span class="pl-pds">&lt;</span>iostream<span class="pl-pds">&gt;</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-amr10g-cpp-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">using</span> <span class="pl-k">namespace</span> <span class="pl-en">std</span><span class="pl-k">;</span></td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-amr10g-cpp-LC3" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-amr10g-cpp-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-k">int</span> MAX = <span class="pl-c1">20005</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-amr10g-cpp-LC5" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-amr10g-cpp-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> N;              <span class="pl-c"><span class="pl-c">//</span> Lần lượt là số lượng đứa trẻ</span></td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-amr10g-cpp-LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> K;              <span class="pl-c"><span class="pl-c">//</span> Số lượng trẻ cần đóng vai binh lính</span></td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-amr10g-cpp-LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> Height[MAX];    <span class="pl-c"><span class="pl-c">//</span> Mảng lưu chiều cao của N đứa trẻ</span></td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-amr10g-cpp-LC9" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-amr10g-cpp-LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-k">void</span> <span class="pl-en">Merge</span>(<span class="pl-k">int</span> *height, <span class="pl-k">int</span> left, <span class="pl-k">int</span> m, <span class="pl-k">int</span> right)</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-amr10g-cpp-LC11" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-amr10g-cpp-LC12" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">int</span> l = left, r = m + <span class="pl-c1">1</span>, k = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-amr10g-cpp-LC13" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">int</span> *temp = <span class="pl-k">new</span> <span class="pl-k">int</span>[right - left + <span class="pl-c1">1</span>];</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L14" class="blob-num js-line-number" data-line-number="14"></td>\n        <td id="file-amr10g-cpp-LC14" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L15" class="blob-num js-line-number" data-line-number="15"></td>\n        <td id="file-amr10g-cpp-LC15" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">while</span>(l &lt;= m &amp;&amp; r &lt;= right)</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L16" class="blob-num js-line-number" data-line-number="16"></td>\n        <td id="file-amr10g-cpp-LC16" class="blob-code blob-code-inner js-file-line">    {</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L17" class="blob-num js-line-number" data-line-number="17"></td>\n        <td id="file-amr10g-cpp-LC17" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span>(height[l] &gt; height[r]) temp[k++] = height[l++];</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L18" class="blob-num js-line-number" data-line-number="18"></td>\n        <td id="file-amr10g-cpp-LC18" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">else</span> temp[k++] = height[r++];</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L19" class="blob-num js-line-number" data-line-number="19"></td>\n        <td id="file-amr10g-cpp-LC19" class="blob-code blob-code-inner js-file-line">    }</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L20" class="blob-num js-line-number" data-line-number="20"></td>\n        <td id="file-amr10g-cpp-LC20" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L21" class="blob-num js-line-number" data-line-number="21"></td>\n        <td id="file-amr10g-cpp-LC21" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">while</span>(l &lt;= m) temp[k++] = height[l++];</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L22" class="blob-num js-line-number" data-line-number="22"></td>\n        <td id="file-amr10g-cpp-LC22" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L23" class="blob-num js-line-number" data-line-number="23"></td>\n        <td id="file-amr10g-cpp-LC23" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">while</span>(r &lt;= right) temp[k++] = height[r++];</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L24" class="blob-num js-line-number" data-line-number="24"></td>\n        <td id="file-amr10g-cpp-LC24" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L25" class="blob-num js-line-number" data-line-number="25"></td>\n        <td id="file-amr10g-cpp-LC25" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">0</span>; i &lt; k; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L26" class="blob-num js-line-number" data-line-number="26"></td>\n        <td id="file-amr10g-cpp-LC26" class="blob-code blob-code-inner js-file-line">        height[i + left] = temp[i];</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L27" class="blob-num js-line-number" data-line-number="27"></td>\n        <td id="file-amr10g-cpp-LC27" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L28" class="blob-num js-line-number" data-line-number="28"></td>\n        <td id="file-amr10g-cpp-LC28" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">delete[]</span> temp;</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L29" class="blob-num js-line-number" data-line-number="29"></td>\n        <td id="file-amr10g-cpp-LC29" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L30" class="blob-num js-line-number" data-line-number="30"></td>\n        <td id="file-amr10g-cpp-LC30" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L31" class="blob-num js-line-number" data-line-number="31"></td>\n        <td id="file-amr10g-cpp-LC31" class="blob-code blob-code-inner js-file-line"><span class="pl-k">void</span> <span class="pl-en">MergeSort</span>(<span class="pl-k">int</span> *height, <span class="pl-k">int</span> left, <span class="pl-k">int</span> right)</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L32" class="blob-num js-line-number" data-line-number="32"></td>\n        <td id="file-amr10g-cpp-LC32" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L33" class="blob-num js-line-number" data-line-number="33"></td>\n        <td id="file-amr10g-cpp-LC33" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">int</span> m;</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L34" class="blob-num js-line-number" data-line-number="34"></td>\n        <td id="file-amr10g-cpp-LC34" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span>(left &lt; right)</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L35" class="blob-num js-line-number" data-line-number="35"></td>\n        <td id="file-amr10g-cpp-LC35" class="blob-code blob-code-inner js-file-line">    {</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L36" class="blob-num js-line-number" data-line-number="36"></td>\n        <td id="file-amr10g-cpp-LC36" class="blob-code blob-code-inner js-file-line">        m = (left + right)/<span class="pl-c1">2</span>; </td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L37" class="blob-num js-line-number" data-line-number="37"></td>\n        <td id="file-amr10g-cpp-LC37" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">MergeSort</span>(height, left, m);</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L38" class="blob-num js-line-number" data-line-number="38"></td>\n        <td id="file-amr10g-cpp-LC38" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">MergeSort</span>(height, m + <span class="pl-c1">1</span>, right);</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L39" class="blob-num js-line-number" data-line-number="39"></td>\n        <td id="file-amr10g-cpp-LC39" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">Merge</span>(height, left, m, right);</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L40" class="blob-num js-line-number" data-line-number="40"></td>\n        <td id="file-amr10g-cpp-LC40" class="blob-code blob-code-inner js-file-line">    }</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L41" class="blob-num js-line-number" data-line-number="41"></td>\n        <td id="file-amr10g-cpp-LC41" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L42" class="blob-num js-line-number" data-line-number="42"></td>\n        <td id="file-amr10g-cpp-LC42" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L43" class="blob-num js-line-number" data-line-number="43"></td>\n        <td id="file-amr10g-cpp-LC43" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">main</span>()</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L44" class="blob-num js-line-number" data-line-number="44"></td>\n        <td id="file-amr10g-cpp-LC44" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L45" class="blob-num js-line-number" data-line-number="45"></td>\n        <td id="file-amr10g-cpp-LC45" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">ios::sync_with_stdio</span>(<span class="pl-c1">false</span>);</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L46" class="blob-num js-line-number" data-line-number="46"></td>\n        <td id="file-amr10g-cpp-LC46" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L47" class="blob-num js-line-number" data-line-number="47"></td>\n        <td id="file-amr10g-cpp-LC47" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> comment dòng này trước khi submit</span></td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L48" class="blob-num js-line-number" data-line-number="48"></td>\n        <td id="file-amr10g-cpp-LC48" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">freopen</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>input.txt<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>r<span class="pl-pds">&quot;</span></span>,stdin);</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L49" class="blob-num js-line-number" data-line-number="49"></td>\n        <td id="file-amr10g-cpp-LC49" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L50" class="blob-num js-line-number" data-line-number="50"></td>\n        <td id="file-amr10g-cpp-LC50" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">int</span> TC = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L51" class="blob-num js-line-number" data-line-number="51"></td>\n        <td id="file-amr10g-cpp-LC51" class="blob-code blob-code-inner js-file-line">    cin &gt;&gt; TC;</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L52" class="blob-num js-line-number" data-line-number="52"></td>\n        <td id="file-amr10g-cpp-LC52" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L53" class="blob-num js-line-number" data-line-number="53"></td>\n        <td id="file-amr10g-cpp-LC53" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span>(<span class="pl-k">int</span> tc = <span class="pl-c1">0</span>; tc &lt; TC; tc++)</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L54" class="blob-num js-line-number" data-line-number="54"></td>\n        <td id="file-amr10g-cpp-LC54" class="blob-code blob-code-inner js-file-line">    {</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L55" class="blob-num js-line-number" data-line-number="55"></td>\n        <td id="file-amr10g-cpp-LC55" class="blob-code blob-code-inner js-file-line">        cin &gt;&gt; N &gt;&gt; K;</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L56" class="blob-num js-line-number" data-line-number="56"></td>\n        <td id="file-amr10g-cpp-LC56" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">0</span>; i &lt; N; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L57" class="blob-num js-line-number" data-line-number="57"></td>\n        <td id="file-amr10g-cpp-LC57" class="blob-code blob-code-inner js-file-line">            cin &gt;&gt; Height[i];</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L58" class="blob-num js-line-number" data-line-number="58"></td>\n        <td id="file-amr10g-cpp-LC58" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L59" class="blob-num js-line-number" data-line-number="59"></td>\n        <td id="file-amr10g-cpp-LC59" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> Nếu chỉ phải chọn 1 đứa trẻ thì đáp án là 0</span></td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L60" class="blob-num js-line-number" data-line-number="60"></td>\n        <td id="file-amr10g-cpp-LC60" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span>(K == <span class="pl-c1">1</span>) cout &lt;&lt; <span class="pl-s"><span class="pl-pds">&quot;</span>0<span class="pl-pds">&quot;</span></span> &lt;&lt; endl;</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L61" class="blob-num js-line-number" data-line-number="61"></td>\n        <td id="file-amr10g-cpp-LC61" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">else</span></td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L62" class="blob-num js-line-number" data-line-number="62"></td>\n        <td id="file-amr10g-cpp-LC62" class="blob-code blob-code-inner js-file-line">        {</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L63" class="blob-num js-line-number" data-line-number="63"></td>\n        <td id="file-amr10g-cpp-LC63" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> Sắp xếp những đứa trẻ theo chiều cao giảm dần</span></td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L64" class="blob-num js-line-number" data-line-number="64"></td>\n        <td id="file-amr10g-cpp-LC64" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">MergeSort</span>(Height, <span class="pl-c1">0</span>, N-<span class="pl-c1">1</span>);</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L65" class="blob-num js-line-number" data-line-number="65"></td>\n        <td id="file-amr10g-cpp-LC65" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L66" class="blob-num js-line-number" data-line-number="66"></td>\n        <td id="file-amr10g-cpp-LC66" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> Khi mảng đã sắp xếp, ta chỉ cần kiểm tra độ chênh lệnh</span></td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L67" class="blob-num js-line-number" data-line-number="67"></td>\n        <td id="file-amr10g-cpp-LC67" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> chiều cao giữa đứa trẻ thứ i và thứ i + K - 1</span></td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L68" class="blob-num js-line-number" data-line-number="68"></td>\n        <td id="file-amr10g-cpp-LC68" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> chọn ra khoảng nào có độ chênh lệnh nhỏ nhất sẽ là kết quả cần tìm</span></td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L69" class="blob-num js-line-number" data-line-number="69"></td>\n        <td id="file-amr10g-cpp-LC69" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">int</span> min = <span class="pl-c1">1000000005</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L70" class="blob-num js-line-number" data-line-number="70"></td>\n        <td id="file-amr10g-cpp-LC70" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">0</span>; i + K - <span class="pl-c1">1</span> &lt; N; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L71" class="blob-num js-line-number" data-line-number="71"></td>\n        <td id="file-amr10g-cpp-LC71" class="blob-code blob-code-inner js-file-line">            {</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L72" class="blob-num js-line-number" data-line-number="72"></td>\n        <td id="file-amr10g-cpp-LC72" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">int</span> sub = Height[i] - Height[i+K-<span class="pl-c1">1</span>];</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L73" class="blob-num js-line-number" data-line-number="73"></td>\n        <td id="file-amr10g-cpp-LC73" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span>(sub &lt; min) min = sub;</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L74" class="blob-num js-line-number" data-line-number="74"></td>\n        <td id="file-amr10g-cpp-LC74" class="blob-code blob-code-inner js-file-line">            }</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L75" class="blob-num js-line-number" data-line-number="75"></td>\n        <td id="file-amr10g-cpp-LC75" class="blob-code blob-code-inner js-file-line">            cout &lt;&lt; min &lt;&lt; endl;</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L76" class="blob-num js-line-number" data-line-number="76"></td>\n        <td id="file-amr10g-cpp-LC76" class="blob-code blob-code-inner js-file-line">        }</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L77" class="blob-num js-line-number" data-line-number="77"></td>\n        <td id="file-amr10g-cpp-LC77" class="blob-code blob-code-inner js-file-line">    }</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L78" class="blob-num js-line-number" data-line-number="78"></td>\n        <td id="file-amr10g-cpp-LC78" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L79" class="blob-num js-line-number" data-line-number="79"></td>\n        <td id="file-amr10g-cpp-LC79" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-amr10g-cpp-L80" class="blob-num js-line-number" data-line-number="80"></td>\n        <td id="file-amr10g-cpp-LC80" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/completejavascript/03f886184d032ea5f1985e06579eb40d/raw/c23f7fb1abd9ef201fc7d33b921c41ef95e5ac5a/AMR10G.cpp" style="float:right">view raw</a>\n        <a href="https://gist.github.com/completejavascript/03f886184d032ea5f1985e06579eb40d#file-amr10g-cpp">AMR10G.cpp</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div>\n</p>\n<p><em>Code by Phạm Văn Lâm</em></p>',id:"F:/Github/the-algorithms-blog/src/posts/2016-09-25---spoj-com-thuat-toan-bai-amr10g-christmas-play/index.md absPath of file >>> MarkdownRemark",frontmatter:{title:"SPOJ.COM – Thuật toán bài AMR10G – Christmas Play",date:"25/09/2016",categories:["spoj","Tham lam - Greedy"],tags:["phạm văn lâm","spoj.com","thuật toán","thuật toán spoj.com","tham lam greedy"]},fields:{slug:"/spoj-com-thuat-toan-bai-amr10g-christmas-play/"},excerpt:"Đề bài: Lớp mẫu giáo của con tôi đang chuẩn bị một vở kịch cho Noel (hy vọng rằng con trai tôi sẽ giữ vai trò đội trưởng). Những đứa trẻ rất…",timeToRead:6},prevPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài ALIEN – Aliens at the train"},fields:{slug:"/spoj-com-thuat-toan-bai-alien-aliens-at-the-train/"}},nextPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài ANARC09A – Seinfeld"},fields:{slug:"/spoj-com-thuat-toan-bai-anarc09a-seinfeld/"}},site:{siteMetadata:{title:"Algorithms Blog",siteUrl:"http://thuattoan.phamvanlam.com",twitterHandle:"@CmpltJavaScript",fbCommentId:"728566430818562"}}},pathContext:{slug:"/spoj-com-thuat-toan-bai-amr10g-christmas-play/",prevSlug:"/spoj-com-thuat-toan-bai-alien-aliens-at-the-train/",nextSlug:"/spoj-com-thuat-toan-bai-anarc09a-seinfeld/"}}}});
//# sourceMappingURL=path---spoj-com-thuat-toan-bai-amr-10-g-christmas-play-1c9acb6e0bcd0e70dbd0.js.map