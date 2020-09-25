class Chess {
    constructor ( parent,color = '#333' ) {
        const cvs = document.createElement( 'canvas' );
        const { width, height } = window.getComputedStyle( parent, null );
        const [ boardW, boardH ] = [ parseInt( width ), parseInt( height ) ];
        this.size = boardW / 8;

        [ cvs.width, cvs.height ] = [ boardW, boardH ];

        parent.appendChild( cvs );

        const ctx = cvs.getContext( '2d' );
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.strokeRect( 0, 0, boardW, boardH );
        this.ctx = ctx;
        this.init();
    }

    init(){
        for ( let i = 1; i < 8; i++ ) {
            this.column( 0, 4, i );
            this.column( 5, 9, i );
        }

        for ( let i = 1; i < 9; i++ ) this.rows( 0, 8, i );

        this.chaLine( 3, 0 );
        this.chaLine( 3, 7 );

        this.ctx.font = `${ this.size / 70 * 30 }px PingFangSC-Medium`;
        this.ctx.fillText( '楚河', this.size * 1.1, this.size * 4.65 );
        this.ctx.fillText( '汉界', this.size * 6.1, this.size * 4.65 );

        const jiaoArr = [ [ 1, 2 ], [ 7, 2 ], [ 1, 7 ], [ 7, 7 ] ];
        for ( let i = 0; i < jiaoArr.length; i++ ) {
            this.jiaoyin( ...jiaoArr[ i ] );
        }

        for ( let i = 0; i <= 8; i += 2 ) {
            this.jiaoyin( i, 3 );
            this.jiaoyin( i, 6 );
        }
    }

    column( start, end, i ) {
        this.ctx.beginPath();
        this.ctx.moveTo( i * this.size, start * this.size );
        this.ctx.lineTo( i * this.size, end * this.size );
        this.ctx.stroke();
    }

    rows( start, end, i ) {
        this.ctx.beginPath();
        this.ctx.moveTo( start * this.size, i * this.size );
        this.ctx.lineTo( end * this.size, i * this.size );
        this.ctx.stroke();
    }

    chaLine( x, y ) {
        this.ctx.beginPath();
        this.ctx.moveTo( x * this.size, y * this.size );
        this.ctx.lineTo( ( x + 2 ) * this.size, ( y + 2 ) * this.size );
        this.ctx.lineTo( x * this.size, ( y + 2 ) * this.size );
        this.ctx.lineTo( ( x + 2 ) * this.size, y * this.size );
        this.ctx.stroke();
    }

    jiaoyin( x, y ) {
        const [ s, b ] = [ .1, .3 ];
        this.ctx.beginPath();
        this.ctx.moveTo( ( x - s ) * this.size, ( y - b ) * this.size );
        this.ctx.lineTo( ( x - s ) * this.size, ( y - s ) * this.size );
        this.ctx.lineTo( ( x - b ) * this.size, ( y - s ) * this.size );
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo( ( x + s ) * this.size, ( y - b ) * this.size );
        this.ctx.lineTo( ( x + s ) * this.size, ( y - s ) * this.size );
        this.ctx.lineTo( ( x + b ) * this.size, ( y - s ) * this.size );
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo( ( x - s ) * this.size, ( y + b ) * this.size );
        this.ctx.lineTo( ( x - s ) * this.size, ( y + s ) * this.size );
        this.ctx.lineTo( ( x - b ) * this.size, ( y + s ) * this.size );
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo( ( x + s ) * this.size, ( y + b ) * this.size );
        this.ctx.lineTo( ( x + s ) * this.size, ( y + s ) * this.size );
        this.ctx.lineTo( ( x + b ) * this.size, ( y + s ) * this.size );
        this.ctx.stroke();
    }
}

export { Chess }