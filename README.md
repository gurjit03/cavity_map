# cavity_map
<h4>
Problem Statement
</h4>
You are given a square map of size n×n. Each cell of the map has a value denoting its depth. We will call a cell of the map a cavity if and only if this cell is not on the border of the map and each cell adjacent to it has strictly smaller depth. Two cells are adjacent if they have a common side (edge).

You need to find all the cavities on the map and depict them with the uppercase character X.
<h4>
Input Format
</h4>

The first line contains an integer, n, denoting the size of the map. Each of the following n lines contains n positive digits without spaces. Each digit (1-9) denotes the depth of the appropriate area.

<h4>
Constraints
</h4>
1≤n≤100 <br />
<h4>
Output Format
</h4>

Output n lines, denoting the resulting map. Each cavity should be replaced with character X.
<h4>
Sample Input
<h4>
4 <br />
1112 <br />
1912 <br />
1892 <br />
1234 <br />
<h4>
Sample Output
</h4>

1112 <br />
1X12 <br />
18X2 <br />
1234 <br />

