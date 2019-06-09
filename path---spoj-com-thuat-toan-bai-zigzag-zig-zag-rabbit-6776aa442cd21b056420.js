webpackJsonp([0xd141023e6243],{861:function(n,l){n.exports={data:{post:{html:'<h2>Đề bài:</h2>\n<p>Một ma trận kích thước NxN được điền đầy bởi các con số từ 1 đến N<sup>2</sup> theo đường chéo zig-zag. Bảng sau đây mô tả những con số trong ma trận kích thước N = 6. </p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/the-algorithms-blog/static/zigzag-rabbit-spoj-com-thuattoan-phamvanlam-com-7ea4e08e15cb2b697a4a463080697b59-e389b.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 215px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 91.62790697674417%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAA7DAAAOwwHHb6hkAAACpUlEQVQ4y0VUB5KDMAzk/3+8I3RTTO+B6HZlnGOGiaJi764kgmmapKoqsdZKXdf60qavaRpp2/br96+PNbZxNvJZw9zAF43jKMuySNdaKctKhmGUCb4kSRGbZMbFzO3hH4deijyXJM1lQE6eJJLmhVS4LOBh53kKn+M4ZFtXeb/fsq6b/tLHd993zbnuG7FFruuC/wSIVU7ET+QqwrIs9eZ5nh2Nplab/q7rFDX9pEq773uNET1tYwzYDBrLgTpoUTSNPYosbrlkGjpAb2Tddtm3TeI4ke2xTVHgsBr2qpfYtlfkaRRKnGbS4QLVcFWal96yAB3pUFMmUw7GGaPNX6J7I4c1ig41lKfGWUqZ3FnETjUPNXaPlKenGXxpkyZjvJCHsZ42Y0qZMIfOKs3r/sjYdwgUsj2NSEC5hhxE/QpfkiF2wB+GP85GXppEYjAZvCwgKt/lDTr5bs4PDT70MaZdxsFE4x+iu9F5PtZTLtEp0mZjfHfNIwWpVlX9HfLmGfqW8sBXcimeWIGmaZdrFKdpKut+6GEM9P2gdOIo1os2zF4Y/urQc1aj169EcarosyTWBfh22VNmMzw1UvmXYlcJ+Nw3JgDNIM3P56ON8dLwrIDwuUb22UdjCiA0St39N0rfYm/VNqXUqKngq2u3y2Xp8h/K2GPs57y4lWtRGL4ihxY0E+wp9/fYN7Vt20GKXfIshZ5ubU2eKQiiDbhSnEFPky8fjsCKQ0mLdJlMm5pRZ1J2AOyXMlHqgUWR6xwxsQTlnCv2dDKKItdJ2BS+BUJqxSYWkID+LE1cDQ8kkh60p9mh4WAbHLCiOed5SJblkGNRm5pd163dbxoA6Addv6aCnqDPT1lQPeKTNtH63fbzyK77jy/9/gtDjSkFG8FB5yhx9f4Aqmpb5hYO6kQAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="zigzag-rabbit-spoj-com-thuattoan-phamvanlam-com"\n        title=""\n        src="/the-algorithms-blog/static/zigzag-rabbit-spoj-com-thuattoan-phamvanlam-com-7ea4e08e15cb2b697a4a463080697b59-e389b.png"\n        srcset="/the-algorithms-blog/static/zigzag-rabbit-spoj-com-thuattoan-phamvanlam-com-7ea4e08e15cb2b697a4a463080697b59-efba9.png 148w,\n/the-algorithms-blog/static/zigzag-rabbit-spoj-com-thuattoan-phamvanlam-com-7ea4e08e15cb2b697a4a463080697b59-e389b.png 215w"\n        sizes="(max-width: 215px) 100vw, 215px"\n      />\n    </span>\n  </span>\n  \n  </a>\n     </p>\n<p>Có một con thỏ ở vị trí số 1. Nó có thể nhảy sang ô hàng xóm kề với ô nó đang đứng theo 4 hướng (trên, dưới, trái, phải) nếu ô đó tồn tại. </p>\n<p>Cho K chữ cái biểu diễn cách nhảy của con thỏ. Hãy viết chương trình tính tổng các số của tất cả các ô mà con thỏ nhảy tới. Biết con thỏ không bao giờ nhảy ra khỏi ma trận.</p>\n<h3>Đầu vào:</h3>\n<p>Dòng đầu tiên bao gồm 2 số nguyên N và K (1 &#x3C;= N &#x3C;= 100000, 1 &#x3C;= K &#x3C;= 300000), lần lượt là kích thước ma trận và số bước nhảy của con thỏ. </p>\n<p>Dòng tiếp theo là 1 dãy bao gồm K kí tự \'U\', \'D\', \'L\' và \'R\', miêu tả cách nhảy của con thỏ. Trong đó, \'U\', \'D\', \'L\',\'R\' lần lượt là nhảy lên (UP), nhảy xuống (DOWN), nhảy sang trái (LEFT) và nhảy sang phải (RIGHT). Và con thỏ sẽ không nhảy ra khỏi ma trận.</p>\n<h3>Đầu ra:</h3>\n<p>Bao gồm 1 dòng chứa 1 số nguyên là tổng của tất cả những ô mà con nhỏ nhảy tới. </p>\n<p><strong>Chú ý</strong>: Các số không phải luôn thỏa mãn là số nguyên 32 bit.</p>\n<h3><strong>Ví dụ:</strong></h3>\n<p><strong>1) Đầu vào:</strong> </p>\n<pre><code>6 8 \nDDRRUULL\n</code></pre>\n<p><strong>Đầu ra:</strong> </p>\n<p>47 </p>\n<p>Giải thích: con thỏ nhảy như sau: 1, 3, 4, 9, 13, 8, 6, 2, 1 </p>\n<p><strong>2) Đầu vào:</strong> </p>\n<pre><code>3 8 \nDDRRUULL\n</code></pre>\n<p><strong>Đầu ra:</strong></p>\n<p>41 </p>\n<p>Giải thích: con thỏ nhảy như sau: 1, 3, 4, 8, 9, 7, 6, 2, 1 </p>\n<p><strong>3) Đầu vào:</strong></p>\n<pre><code>6 10 \nRRRRRDDDDD\n</code></pre>\n<p><strong>Đầu ra:</strong> </p>\n<p>203 </p>\n<p>Giải thích: con thỏ nhảy như sau: 1, 2, 6, 7, 15, 16, 26, 27, 33, 34, 36 </p>\n<p><em>Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: <a href="http://www.spoj.com/problems/ZIGZAG/">http://www.spoj.com/problems/ZIGZAG/</a></em></p>\n<h3>Phân tích:</h3>\n<ul>\n<li>\n<p>Tôi sẽ sử dụng <a href="/the-algorithms-blog/category/tham-lam-greedy/">thuật toán tham lam - Greedy</a> để giải bài toán này. </p>\n</li>\n<li>\n<p>Ở đây tôi sẽ không sử dụng một mảng để lưu thông tin của ma trận. Vì việc tạo ra ma trận này là rất mất thời gian. Nếu các bạn để ý thì các bạn sẽ nhận ra được quy luật. Qua đó, từ tọa độ hàng, cột tôi có thể suy ra giá trị của ô đó là bao nhiêu. </p>\n</li>\n<li>\n<p>Với ma trận kích thước N thì sẽ có 2*N-1 đường chéo (có dạng \'/\'). Mỗi đường chéo sẽ bao gồm các ô mà tổng giá trị hàng và cột của chúng là như nhau và tôi đặt là chỉ số của đường chéo. Ví dụ: đường chéo 0 chỉ bao gồm 1 phần tử <code>[0][0]</code>; đường chéo 1 bao gồm 2 ô là <code>[0][1]</code> và <code>[1][0]</code>; đường chéo 2 bao gồm 3 ô là : <code>[0][2]</code>, <code>[1][1]</code> và <code>[2][0]</code>,,.. cho đến đường chéo 2*N-2 bao gồm 1 ô là <code>[N-1][N-1]</code>. </p>\n</li>\n<li>\n<p>Sử dụng quy nạp tôi chứng minh được công thức tính số nhỏ nhất của 1 đường chéo như sau: </p>\n<ul>\n<li>Với i là chỉ số đường chéo (i = 0, 1, 2,...,2*N-2), k là số nhỏ nhất của 1 đường chéo. </li>\n<li>Nếu i &#x3C; N thì  k = (1 + (i*(i+1))/2); </li>\n<li>Ngược lại, k =  (((3*N - i)*(i - N + 1))/2 + remember) </li>\n<li>Trong đó, remember là số nhỏ nhất của đường chéo ở giữa (chỉ số N - 1) </li>\n</ul>\n</li>\n<li>\n<p>Rõ ràng, khi tôi đã biết chỉ số hàng, cột của một điểm và số nhỏ nhất của đường chéo mà điểm đó thuộc vào thì tôi hoàn toàn có thể tính được giá trị của điểm đó (cụ thể tôi sẽ trình bày ở trong code phía dưới.)</p>\n</li>\n</ul>\n<h2>Lời giải:</h2>\n<p>(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu.  Nên rất mong nhận được sự chia sẻ của các bạn.)</p>\n<h3>Code C/C++:</h3>\n<p><div id="gist91918223" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-zigzag-cpp" class="file">\n    \n\n  <div itemprop="text" class="Box-body p-0 blob-wrapper data type-c ">\n      \n<table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-zigzag-cpp-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-zigzag-cpp-LC1" class="blob-code blob-code-inner js-file-line">#<span class="pl-k">include</span><span class="pl-s"><span class="pl-pds">&lt;</span>iostream<span class="pl-pds">&gt;</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-zigzag-cpp-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">using</span> <span class="pl-k">namespace</span> <span class="pl-en">std</span><span class="pl-k">;</span></td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-zigzag-cpp-LC3" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-zigzag-cpp-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-k">typedef</span> <span class="pl-k">unsigned</span> <span class="pl-k">long</span> <span class="pl-k">long</span> ull;</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-zigzag-cpp-LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> ull MAX = <span class="pl-c1">300005</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-zigzag-cpp-LC6" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-zigzag-cpp-LC7" class="blob-code blob-code-inner js-file-line">ull N, K;</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-zigzag-cpp-LC8" class="blob-code blob-code-inner js-file-line">ull remember;</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-zigzag-cpp-LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-k">char</span> Str[MAX];  <span class="pl-c"><span class="pl-c">//</span> Lưu xâu đầu vào</span></td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-zigzag-cpp-LC10" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-zigzag-cpp-LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">/*</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-zigzag-cpp-LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* Lấy ra số nhỏ nhất của một đường chéo thứ i</span></td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-zigzag-cpp-LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* Đường chéo thứ i là đường chéo có tổng chỉ số hàng và cột</span></td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L14" class="blob-num js-line-number" data-line-number="14"></td>\n        <td id="file-zigzag-cpp-LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* của mỗi ô là bằng i.</span></td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L15" class="blob-num js-line-number" data-line-number="15"></td>\n        <td id="file-zigzag-cpp-LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* @PARAM : i : chỉ số của đường chéo</span></td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L16" class="blob-num js-line-number" data-line-number="16"></td>\n        <td id="file-zigzag-cpp-LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* RETURN : giá trị số nhỏ nhất của đường chéo đó.</span></td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L17" class="blob-num js-line-number" data-line-number="17"></td>\n        <td id="file-zigzag-cpp-LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">*/</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L18" class="blob-num js-line-number" data-line-number="18"></td>\n        <td id="file-zigzag-cpp-LC18" class="blob-code blob-code-inner js-file-line">ull <span class="pl-en">GetMinDiagon</span>(ull i)</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L19" class="blob-num js-line-number" data-line-number="19"></td>\n        <td id="file-zigzag-cpp-LC19" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L20" class="blob-num js-line-number" data-line-number="20"></td>\n        <td id="file-zigzag-cpp-LC20" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">if</span>(i &lt; N) <span class="pl-k">return</span> (<span class="pl-c1">1</span> + (i*(i+<span class="pl-c1">1</span>))/<span class="pl-c1">2</span>);</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L21" class="blob-num js-line-number" data-line-number="21"></td>\n        <td id="file-zigzag-cpp-LC21" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">return</span> (((<span class="pl-c1">3</span>*N - i)*(i - N + <span class="pl-c1">1</span>))/<span class="pl-c1">2</span> + remember);</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L22" class="blob-num js-line-number" data-line-number="22"></td>\n        <td id="file-zigzag-cpp-LC22" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L23" class="blob-num js-line-number" data-line-number="23"></td>\n        <td id="file-zigzag-cpp-LC23" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L24" class="blob-num js-line-number" data-line-number="24"></td>\n        <td id="file-zigzag-cpp-LC24" class="blob-code blob-code-inner js-file-line">ull <span class="pl-en">GetValue</span>(ull row, ull col)</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L25" class="blob-num js-line-number" data-line-number="25"></td>\n        <td id="file-zigzag-cpp-LC25" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L26" class="blob-num js-line-number" data-line-number="26"></td>\n        <td id="file-zigzag-cpp-LC26" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c"><span class="pl-c">//</span> Tỉnh tổng chỉ số hàng và cột để suy ra chỉ số đường chéo</span></td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L27" class="blob-num js-line-number" data-line-number="27"></td>\n        <td id="file-zigzag-cpp-LC27" class="blob-code blob-code-inner js-file-line">\tull sum = row + col;</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L28" class="blob-num js-line-number" data-line-number="28"></td>\n        <td id="file-zigzag-cpp-LC28" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c"><span class="pl-c">//</span> Tính số nhỏ nhất của đường chéo đó.</span></td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L29" class="blob-num js-line-number" data-line-number="29"></td>\n        <td id="file-zigzag-cpp-LC29" class="blob-code blob-code-inner js-file-line">\tull min_diagon = <span class="pl-c1">GetMinDiagon</span>(sum);</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L30" class="blob-num js-line-number" data-line-number="30"></td>\n        <td id="file-zigzag-cpp-LC30" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L31" class="blob-num js-line-number" data-line-number="31"></td>\n        <td id="file-zigzag-cpp-LC31" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c"><span class="pl-c">//</span> chỉ số đường chéo là chẵn</span></td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L32" class="blob-num js-line-number" data-line-number="32"></td>\n        <td id="file-zigzag-cpp-LC32" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">if</span>(sum%<span class="pl-c1">2</span> == <span class="pl-c1">0</span> &amp;&amp; sum &lt; N)</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L33" class="blob-num js-line-number" data-line-number="33"></td>\n        <td id="file-zigzag-cpp-LC33" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L34" class="blob-num js-line-number" data-line-number="34"></td>\n        <td id="file-zigzag-cpp-LC34" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">return</span> min_diagon + col;</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L35" class="blob-num js-line-number" data-line-number="35"></td>\n        <td id="file-zigzag-cpp-LC35" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L36" class="blob-num js-line-number" data-line-number="36"></td>\n        <td id="file-zigzag-cpp-LC36" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">else</span> <span class="pl-k">if</span>(sum%<span class="pl-c1">2</span> == <span class="pl-c1">0</span> &amp;&amp; sum &gt;= N)</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L37" class="blob-num js-line-number" data-line-number="37"></td>\n        <td id="file-zigzag-cpp-LC37" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L38" class="blob-num js-line-number" data-line-number="38"></td>\n        <td id="file-zigzag-cpp-LC38" class="blob-code blob-code-inner js-file-line">\t\tull col_start = sum - (N-<span class="pl-c1">1</span>);</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L39" class="blob-num js-line-number" data-line-number="39"></td>\n        <td id="file-zigzag-cpp-LC39" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">return</span> min_diagon + (col - col_start);</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L40" class="blob-num js-line-number" data-line-number="40"></td>\n        <td id="file-zigzag-cpp-LC40" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L41" class="blob-num js-line-number" data-line-number="41"></td>\n        <td id="file-zigzag-cpp-LC41" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c"><span class="pl-c">//</span> Chỉ số đường chéo là lẻ</span></td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L42" class="blob-num js-line-number" data-line-number="42"></td>\n        <td id="file-zigzag-cpp-LC42" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">else</span> <span class="pl-k">if</span>(sum%<span class="pl-c1">2</span> == <span class="pl-c1">1</span> &amp;&amp; sum &lt; N)</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L43" class="blob-num js-line-number" data-line-number="43"></td>\n        <td id="file-zigzag-cpp-LC43" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L44" class="blob-num js-line-number" data-line-number="44"></td>\n        <td id="file-zigzag-cpp-LC44" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">return</span> min_diagon + (sum - col);</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L45" class="blob-num js-line-number" data-line-number="45"></td>\n        <td id="file-zigzag-cpp-LC45" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L46" class="blob-num js-line-number" data-line-number="46"></td>\n        <td id="file-zigzag-cpp-LC46" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">else</span> <span class="pl-k">if</span>(sum%<span class="pl-c1">2</span> == <span class="pl-c1">1</span> &amp;&amp; sum &gt;= N)</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L47" class="blob-num js-line-number" data-line-number="47"></td>\n        <td id="file-zigzag-cpp-LC47" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L48" class="blob-num js-line-number" data-line-number="48"></td>\n        <td id="file-zigzag-cpp-LC48" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">return</span> min_diagon + (N-<span class="pl-c1">1</span>) - col;</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L49" class="blob-num js-line-number" data-line-number="49"></td>\n        <td id="file-zigzag-cpp-LC49" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L50" class="blob-num js-line-number" data-line-number="50"></td>\n        <td id="file-zigzag-cpp-LC50" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L51" class="blob-num js-line-number" data-line-number="51"></td>\n        <td id="file-zigzag-cpp-LC51" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L52" class="blob-num js-line-number" data-line-number="52"></td>\n        <td id="file-zigzag-cpp-LC52" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">main</span>()</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L53" class="blob-num js-line-number" data-line-number="53"></td>\n        <td id="file-zigzag-cpp-LC53" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L54" class="blob-num js-line-number" data-line-number="54"></td>\n        <td id="file-zigzag-cpp-LC54" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c1">freopen</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>input.txt<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>r<span class="pl-pds">&quot;</span></span>,stdin);</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L55" class="blob-num js-line-number" data-line-number="55"></td>\n        <td id="file-zigzag-cpp-LC55" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c1">ios::sync_with_stdio</span>(<span class="pl-c1">false</span>);</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L56" class="blob-num js-line-number" data-line-number="56"></td>\n        <td id="file-zigzag-cpp-LC56" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L57" class="blob-num js-line-number" data-line-number="57"></td>\n        <td id="file-zigzag-cpp-LC57" class="blob-code blob-code-inner js-file-line">\tcin &gt;&gt; N &gt;&gt; K &gt;&gt; Str;</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L58" class="blob-num js-line-number" data-line-number="58"></td>\n        <td id="file-zigzag-cpp-LC58" class="blob-code blob-code-inner js-file-line">\tremember = <span class="pl-c1">GetMinDiagon</span>(N-<span class="pl-c1">1</span>);</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L59" class="blob-num js-line-number" data-line-number="59"></td>\n        <td id="file-zigzag-cpp-LC59" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L60" class="blob-num js-line-number" data-line-number="60"></td>\n        <td id="file-zigzag-cpp-LC60" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c"><span class="pl-c">//</span> Khởi tạo vị trí ban đầu là [0][0] và tổng là 1</span></td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L61" class="blob-num js-line-number" data-line-number="61"></td>\n        <td id="file-zigzag-cpp-LC61" class="blob-code blob-code-inner js-file-line">\tull row = <span class="pl-c1">0</span>, col = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L62" class="blob-num js-line-number" data-line-number="62"></td>\n        <td id="file-zigzag-cpp-LC62" class="blob-code blob-code-inner js-file-line">\tull sum = <span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L63" class="blob-num js-line-number" data-line-number="63"></td>\n        <td id="file-zigzag-cpp-LC63" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L64" class="blob-num js-line-number" data-line-number="64"></td>\n        <td id="file-zigzag-cpp-LC64" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c"><span class="pl-c">//</span> Duyệt từng kí tự để xác định cách nhảy của thỏ</span></td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L65" class="blob-num js-line-number" data-line-number="65"></td>\n        <td id="file-zigzag-cpp-LC65" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">0</span>; i &lt; K; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L66" class="blob-num js-line-number" data-line-number="66"></td>\n        <td id="file-zigzag-cpp-LC66" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L67" class="blob-num js-line-number" data-line-number="67"></td>\n        <td id="file-zigzag-cpp-LC67" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">if</span>(Str[i] == <span class="pl-s"><span class="pl-pds">&#39;</span>U<span class="pl-pds">&#39;</span></span>) row -= <span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L68" class="blob-num js-line-number" data-line-number="68"></td>\n        <td id="file-zigzag-cpp-LC68" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">else</span> <span class="pl-k">if</span>(Str[i] == <span class="pl-s"><span class="pl-pds">&#39;</span>D<span class="pl-pds">&#39;</span></span>) row += <span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L69" class="blob-num js-line-number" data-line-number="69"></td>\n        <td id="file-zigzag-cpp-LC69" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">else</span> <span class="pl-k">if</span>(Str[i] == <span class="pl-s"><span class="pl-pds">&#39;</span>R<span class="pl-pds">&#39;</span></span>) col += <span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L70" class="blob-num js-line-number" data-line-number="70"></td>\n        <td id="file-zigzag-cpp-LC70" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">else</span> <span class="pl-k">if</span>(Str[i] == <span class="pl-s"><span class="pl-pds">&#39;</span>L<span class="pl-pds">&#39;</span></span>) col -= <span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L71" class="blob-num js-line-number" data-line-number="71"></td>\n        <td id="file-zigzag-cpp-LC71" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L72" class="blob-num js-line-number" data-line-number="72"></td>\n        <td id="file-zigzag-cpp-LC72" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c"><span class="pl-c">//</span> Cộng dồn các ô mà thỏ nhảy tới.</span></td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L73" class="blob-num js-line-number" data-line-number="73"></td>\n        <td id="file-zigzag-cpp-LC73" class="blob-code blob-code-inner js-file-line">\t\tsum += <span class="pl-c1">GetValue</span>(row, col);</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L74" class="blob-num js-line-number" data-line-number="74"></td>\n        <td id="file-zigzag-cpp-LC74" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L75" class="blob-num js-line-number" data-line-number="75"></td>\n        <td id="file-zigzag-cpp-LC75" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L76" class="blob-num js-line-number" data-line-number="76"></td>\n        <td id="file-zigzag-cpp-LC76" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c"><span class="pl-c">//</span> In kết quả</span></td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L77" class="blob-num js-line-number" data-line-number="77"></td>\n        <td id="file-zigzag-cpp-LC77" class="blob-code blob-code-inner js-file-line">\tcout &lt;&lt; sum &lt;&lt; endl;</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L78" class="blob-num js-line-number" data-line-number="78"></td>\n        <td id="file-zigzag-cpp-LC78" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L79" class="blob-num js-line-number" data-line-number="79"></td>\n        <td id="file-zigzag-cpp-LC79" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">return</span> <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-zigzag-cpp-L80" class="blob-num js-line-number" data-line-number="80"></td>\n        <td id="file-zigzag-cpp-LC80" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/completejavascript/64209abd6d4a6290a03cb6c5b307afa7/raw/904c470e7541e82ca9ea64aa1e685c5964b03e08/ZIGZAG.cpp" style="float:right">view raw</a>\n        <a href="https://gist.github.com/completejavascript/64209abd6d4a6290a03cb6c5b307afa7#file-zigzag-cpp">ZIGZAG.cpp</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div></p>\n<p><em>Code by Phạm Văn Lâm.</em></p>',id:"f:/Github/the-algorithms-blog/src/posts/2016-10-21---spoj-com-thuat-toan-bai-zigzag-zig-zag-rabbit/index.md absPath of file >>> MarkdownRemark",frontmatter:{title:"SPOJ.COM – Thuật toán bài ZIGZAG - Zig-Zag rabbit",date:"20/10/2016",categories:["spoj","Tham lam - Greedy"],tags:["phạm văn lâm","spoj.com","thuật toán","thuật toán spoj.com","tham lam greedy"]},fields:{slug:"/spoj-com-thuat-toan-bai-zigzag-zig-zag-rabbit/"},excerpt:"Đề bài: Một ma trận kích thước NxN được điền đầy bởi các con số từ 1 đến N 2  theo đường chéo zig-zag. Bảng sau đây mô tả những con số trong…",timeToRead:7},prevPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài TRAFFICN - Traffic Network"},fields:{slug:"/spoj-com-thuat-toan-bai-trafficn-traffic-network/"}},nextPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài NDCCARD - Các lá bài Blackjack"},fields:{slug:"/spoj-com-thuat-toan-bai-ndccard-cac-la-bai-blackjack/"}},site:{siteMetadata:{title:"Algorithms Blog",siteUrl:"https://thuattoan.phamvanlam.com",twitterHandle:"@CmpltJavaScript",fbCommentId:"728566430818562",fbId:"100013577851883"}}},pathContext:{slug:"/spoj-com-thuat-toan-bai-zigzag-zig-zag-rabbit/",prevSlug:"/spoj-com-thuat-toan-bai-trafficn-traffic-network/",nextSlug:"/spoj-com-thuat-toan-bai-ndccard-cac-la-bai-blackjack/"}}}});
//# sourceMappingURL=path---spoj-com-thuat-toan-bai-zigzag-zig-zag-rabbit-6776aa442cd21b056420.js.map