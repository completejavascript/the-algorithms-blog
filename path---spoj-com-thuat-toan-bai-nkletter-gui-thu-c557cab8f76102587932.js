webpackJsonp([0xf3234334f830],{817:function(n,e){n.exports={data:{post:{html:'<h2>Đề bài:</h2>\n<p>Vị Giám đốc công ty XYZ cần gửi một văn bản quan trọng tới một đối tác của mình. Văn bản là một xâu S các chữ cái la tinh in thường. Để bảo mật nội dung văn bản, ông Giám đốc gửi 2 bức thư. Bức thư thứ nhất là phần đầu Sb của xâu S, bức thư thứ 2 là phần cuối Se của S. Hai bức thư Sb và Se đảm bảo đầy đủ nội dung của S, tuy nhiên có thể một phần cuối của Sb có thể được viết lặp lại trong phần đầu của Se, song số kí tự được viết lặp lại không biết trước. </p>\n<p>Ví dụ: với văn bản S = ’truongnguyenduquannhat’ tạo ra hai bức thư: </p>\n<p>Sb = truong<strong>ngueNdu</strong>\n<br>\n<strong>ngueNdu</strong>quanNhat = Se </p>\n<p>Sb = ’truongnguyendu’ và Se = ’nguyenduquannhat’ </p>\n<p><strong>Yêu cầu:</strong> Cho hai xâu Sb và Se, hãy xác định một xâu S có thể là nội dung của bức thư sao cho độ dài của xâu S là ngắn nhất.</p>\n<h3>Đầu vào:</h3>\n<p>Dòng đầu chứa xâu Sb, dòng thứ hai chứa xâu Se. Mỗi xâu có độ dài không quá 250.</p>\n<h3>Đầu ra:</h3>\n<p>Ghi ra độ dài của xâu S tìm được.</p>\n<h3>Ví dụ:</h3>\n<p><strong>Đầu vào:</strong> </p>\n<p>truongnguyendu </p>\n<p>nguyenduquannhat </p>\n<p><strong>Đầu ra:</strong> </p>\n<p>22 </p>\n<p><em>Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: <a href="http://vn.spoj.com/problems/NKLETTER/">http://vn.spoj.com/problems/NKLETTER/</a></em></p>\n<h3>Phân tích:</h3>\n<ul>\n<li>\n<p>Trong bài toán này tôi sẽ sử dụng <a href="/the-algorithms-blog/category/tham-lam-greedy/">thuật toán tham lam - Greedy</a> để giải quyết. </p>\n</li>\n<li>\n<p>Tử tưởng chính là tôi sẽ duyệt từ đầu đến cuối xâu SB. Với mỗi vị trí đó, tôi sẽ so sánh thành phần từ vị trí đó đến cuối xâu của xâu SB với thành phần có độ dài tương ứng tính từ đầu mảng của SE. </p>\n</li>\n<li>\n<p>Đến khi tôi tìm được vị trí thỏa mãn đầu tiên, thì đó chính là thành phần trùng nhau của hai xâu thỏa mãn cho xâu S có độ dài nhỏ nhất.</p>\n</li>\n</ul>\n<h2>Lời giải:</h2>\n<p>(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu.  Nên rất mong nhận được sự chia sẻ của các bạn.)</p>\n<h3>Code C/C++:</h3>\n<p><div id="gist91917954" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-nkletter-cpp" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-c">\n      <table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-nkletter-cpp-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-nkletter-cpp-LC1" class="blob-code blob-code-inner js-file-line">#<span class="pl-k">include</span><span class="pl-s"><span class="pl-pds">&lt;</span>iostream<span class="pl-pds">&gt;</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-nkletter-cpp-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">using</span> <span class="pl-k">namespace</span> <span class="pl-en">std</span><span class="pl-k">;</span></td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-nkletter-cpp-LC3" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-nkletter-cpp-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-k">int</span> MAX = <span class="pl-c1">505</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-nkletter-cpp-LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-k">char</span> SB[MAX], SE[MAX];  <span class="pl-c"><span class="pl-c">//</span> Xâu đích S, xâu đầu SB và xâu cuối SE</span></td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-nkletter-cpp-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span>  LengB, LengE;      <span class="pl-c"><span class="pl-c">//</span> Độ dài tương ứng của SB và SE.</span></td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-nkletter-cpp-LC7" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-nkletter-cpp-LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">/*</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-nkletter-cpp-LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* Tính độ dài xâu</span></td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-nkletter-cpp-LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* @PARAM: str : xâu cần tính độ dài</span></td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-nkletter-cpp-LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* RETURN: độ dài xâu</span></td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-nkletter-cpp-LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">*/</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-nkletter-cpp-LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">GetLeng</span>(<span class="pl-k">char</span> *str)</td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L14" class="blob-num js-line-number" data-line-number="14"></td>\n        <td id="file-nkletter-cpp-LC14" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L15" class="blob-num js-line-number" data-line-number="15"></td>\n        <td id="file-nkletter-cpp-LC15" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> leng = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L16" class="blob-num js-line-number" data-line-number="16"></td>\n        <td id="file-nkletter-cpp-LC16" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">while</span>(str[leng] != <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\\0</span><span class="pl-pds">&#39;</span></span>) leng++;</td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L17" class="blob-num js-line-number" data-line-number="17"></td>\n        <td id="file-nkletter-cpp-LC17" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">return</span> leng;</td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L18" class="blob-num js-line-number" data-line-number="18"></td>\n        <td id="file-nkletter-cpp-LC18" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L19" class="blob-num js-line-number" data-line-number="19"></td>\n        <td id="file-nkletter-cpp-LC19" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L20" class="blob-num js-line-number" data-line-number="20"></td>\n        <td id="file-nkletter-cpp-LC20" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">/*</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L21" class="blob-num js-line-number" data-line-number="21"></td>\n        <td id="file-nkletter-cpp-LC21" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* Kiểm tra với với vị trí pos trên SB như vậy có thoả mãn hay không</span></td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L22" class="blob-num js-line-number" data-line-number="22"></td>\n        <td id="file-nkletter-cpp-LC22" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* @PARAM: pos : vị trí đang xét trên SB.</span></td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L23" class="blob-num js-line-number" data-line-number="23"></td>\n        <td id="file-nkletter-cpp-LC23" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* RETURN: true nếu hợp lệ, ngược lại là false</span></td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L24" class="blob-num js-line-number" data-line-number="24"></td>\n        <td id="file-nkletter-cpp-LC24" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">*/</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L25" class="blob-num js-line-number" data-line-number="25"></td>\n        <td id="file-nkletter-cpp-LC25" class="blob-code blob-code-inner js-file-line"><span class="pl-k">bool</span> <span class="pl-en">IsValid</span>(<span class="pl-k">int</span> pos)</td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L26" class="blob-num js-line-number" data-line-number="26"></td>\n        <td id="file-nkletter-cpp-LC26" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L27" class="blob-num js-line-number" data-line-number="27"></td>\n        <td id="file-nkletter-cpp-LC27" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> leng1 = LengB - pos;</td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L28" class="blob-num js-line-number" data-line-number="28"></td>\n        <td id="file-nkletter-cpp-LC28" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">if</span>(leng1 &gt; LengE) <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L29" class="blob-num js-line-number" data-line-number="29"></td>\n        <td id="file-nkletter-cpp-LC29" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L30" class="blob-num js-line-number" data-line-number="30"></td>\n        <td id="file-nkletter-cpp-LC30" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">0</span>; i &lt; leng1; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L31" class="blob-num js-line-number" data-line-number="31"></td>\n        <td id="file-nkletter-cpp-LC31" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">if</span>(SB[pos + i] != SE[i]) <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L32" class="blob-num js-line-number" data-line-number="32"></td>\n        <td id="file-nkletter-cpp-LC32" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L33" class="blob-num js-line-number" data-line-number="33"></td>\n        <td id="file-nkletter-cpp-LC33" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L34" class="blob-num js-line-number" data-line-number="34"></td>\n        <td id="file-nkletter-cpp-LC34" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L35" class="blob-num js-line-number" data-line-number="35"></td>\n        <td id="file-nkletter-cpp-LC35" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L36" class="blob-num js-line-number" data-line-number="36"></td>\n        <td id="file-nkletter-cpp-LC36" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">main</span>()</td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L37" class="blob-num js-line-number" data-line-number="37"></td>\n        <td id="file-nkletter-cpp-LC37" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L38" class="blob-num js-line-number" data-line-number="38"></td>\n        <td id="file-nkletter-cpp-LC38" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c"><span class="pl-c">//</span>freopen(&quot;input.txt&quot;,&quot;r&quot;,stdin);</span></td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L39" class="blob-num js-line-number" data-line-number="39"></td>\n        <td id="file-nkletter-cpp-LC39" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c1">ios::sync_with_stdio</span>(<span class="pl-c1">false</span>);</td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L40" class="blob-num js-line-number" data-line-number="40"></td>\n        <td id="file-nkletter-cpp-LC40" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L41" class="blob-num js-line-number" data-line-number="41"></td>\n        <td id="file-nkletter-cpp-LC41" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c"><span class="pl-c">//</span> Nhập đầu vào</span></td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L42" class="blob-num js-line-number" data-line-number="42"></td>\n        <td id="file-nkletter-cpp-LC42" class="blob-code blob-code-inner js-file-line">\tcin &gt;&gt; SB &gt;&gt; SE;</td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L43" class="blob-num js-line-number" data-line-number="43"></td>\n        <td id="file-nkletter-cpp-LC43" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L44" class="blob-num js-line-number" data-line-number="44"></td>\n        <td id="file-nkletter-cpp-LC44" class="blob-code blob-code-inner js-file-line">\tLengB = <span class="pl-c1">GetLeng</span>(SB);</td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L45" class="blob-num js-line-number" data-line-number="45"></td>\n        <td id="file-nkletter-cpp-LC45" class="blob-code blob-code-inner js-file-line">\tLengE = <span class="pl-c1">GetLeng</span>(SE);</td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L46" class="blob-num js-line-number" data-line-number="46"></td>\n        <td id="file-nkletter-cpp-LC46" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L47" class="blob-num js-line-number" data-line-number="47"></td>\n        <td id="file-nkletter-cpp-LC47" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c"><span class="pl-c">//</span> Duyệt xâu SB từ đầu. Tại mỗi vị trí ta sẽ kiểm tra</span></td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L48" class="blob-num js-line-number" data-line-number="48"></td>\n        <td id="file-nkletter-cpp-LC48" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c"><span class="pl-c">//</span> thành phần cuổi của SB với thành phần đầu tương ứng của SE</span></td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L49" class="blob-num js-line-number" data-line-number="49"></td>\n        <td id="file-nkletter-cpp-LC49" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c"><span class="pl-c">//</span> - cùng độ dài. Nếu chúng giống nhau thì dừng lại.</span></td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L50" class="blob-num js-line-number" data-line-number="50"></td>\n        <td id="file-nkletter-cpp-LC50" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> pos = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L51" class="blob-num js-line-number" data-line-number="51"></td>\n        <td id="file-nkletter-cpp-LC51" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">for</span>(pos = <span class="pl-c1">0</span>; pos &lt; LengB; pos++)</td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L52" class="blob-num js-line-number" data-line-number="52"></td>\n        <td id="file-nkletter-cpp-LC52" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">if</span>(<span class="pl-c1">IsValid</span>(pos)) <span class="pl-k">break</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L53" class="blob-num js-line-number" data-line-number="53"></td>\n        <td id="file-nkletter-cpp-LC53" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L54" class="blob-num js-line-number" data-line-number="54"></td>\n        <td id="file-nkletter-cpp-LC54" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> MinLen = pos + LengE;</td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L55" class="blob-num js-line-number" data-line-number="55"></td>\n        <td id="file-nkletter-cpp-LC55" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L56" class="blob-num js-line-number" data-line-number="56"></td>\n        <td id="file-nkletter-cpp-LC56" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c"><span class="pl-c">//</span> In đầu ra</span></td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L57" class="blob-num js-line-number" data-line-number="57"></td>\n        <td id="file-nkletter-cpp-LC57" class="blob-code blob-code-inner js-file-line">\tcout &lt;&lt; MinLen &lt;&lt; endl;</td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L58" class="blob-num js-line-number" data-line-number="58"></td>\n        <td id="file-nkletter-cpp-LC58" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L59" class="blob-num js-line-number" data-line-number="59"></td>\n        <td id="file-nkletter-cpp-LC59" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">return</span> <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-nkletter-cpp-L60" class="blob-num js-line-number" data-line-number="60"></td>\n        <td id="file-nkletter-cpp-LC60" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/completejavascript/64addc7a563a0c926788de6261cfca1e/raw/5c25e8473b45ec6ce32931698a8090fe099f3fd2/NKLETTER.cpp" style="float:right">view raw</a>\n        <a href="https://gist.github.com/completejavascript/64addc7a563a0c926788de6261cfca1e#file-nkletter-cpp">NKLETTER.cpp</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div>\n</p>\n<p><em>Code by Phạm Văn Lâm.</em></p>',id:"F:/Github/the-algorithms-blog/src/posts/2016-10-18---spoj-com-thuat-toan-bai-nkletter-gui-thu/spoj-com-thuat-toan-bai-nkletter-gui-thu.md absPath of file >>> MarkdownRemark",frontmatter:{title:"SPOJ.COM – Thuật toán bài NKLETTER - Gửi thư",date:"18/10/2016",categories:["spoj","Tham lam - Greedy"],tags:["phạm văn lâm","spoj.com","thuật toán","thuật toán spoj.com","tham lam greedy"]},fields:{slug:"/spoj-com-thuat-toan-bai-nkletter-gui-thu/"},excerpt:"Đề bài: Vị Giám đốc công ty XYZ cần gửi một văn bản quan trọng tới một đối tác của mình. Văn bản là một xâu S các chữ ca…",timeToRead:5},prevPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài CHESSCBG - Bàn cờ thế"},fields:{slug:"/spoj-com-thuat-toan-bai-chesscbg-ban-co-the/"}},nextPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài PIZZALOC - Pizza Location"},fields:{slug:"/spoj-com-thuat-toan-bai-pizzaloc-pizza-location/"}},site:{siteMetadata:{title:"Algorithms Blog",siteUrl:"http://thuattoan.phamvanlam.com",twitterHandle:"@CmpltJavaScript",fbCommentId:"728566430818562"}}},pathContext:{slug:"/spoj-com-thuat-toan-bai-nkletter-gui-thu/",prevSlug:"/spoj-com-thuat-toan-bai-chesscbg-ban-co-the/",nextSlug:"/spoj-com-thuat-toan-bai-pizzaloc-pizza-location/"}}}});
//# sourceMappingURL=path---spoj-com-thuat-toan-bai-nkletter-gui-thu-c557cab8f76102587932.js.map