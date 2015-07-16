describe('Semantic.gs', function() {


  var columnWidth = function(columns) {
    var el = $('<div class="column' + columns + '">');

    $(document.body).append(el);
    var width = el.width();
    el.remove();

    return width;
  };

  var rowWidth = function(columns) {
    var el = $('<div class="row' + columns + '">');

    $(document.body).append(el);
    var width = el.width();
    el.remove();

    return width;
  };

  describe('when initialized with 16 columns of 40px with a 20px gutter', function() {
    it('has columns that match the dimensions of the 16 column 960.gs', function() {

      expect( columnWidth(1) ).toEqual(40);
      expect( columnWidth(2) ).toEqual(100);
      expect( columnWidth(3) ).toEqual(160);
      expect( columnWidth(4) ).toEqual(220);
      expect( columnWidth(5) ).toEqual(280);
      expect( columnWidth(6) ).toEqual(340);
      expect( columnWidth(7) ).toEqual(400);
      expect( columnWidth(8) ).toEqual(460);
      expect( columnWidth(9) ).toEqual(520);
      expect( columnWidth(10) ).toEqual(580);
      expect( columnWidth(11) ).toEqual(640);
      expect( columnWidth(12) ).toEqual(700);
      expect( columnWidth(13) ).toEqual(760);
      expect( columnWidth(14) ).toEqual(820);
      expect( columnWidth(15) ).toEqual(880);
      expect( columnWidth(16) ).toEqual(940);


    });
  });

  it('has rows that equal the width of the matching column + gutter-width', function() {
      expect( rowWidth(1) ).toEqual( columnWidth(1)+20 );
      expect( rowWidth(2) ).toEqual( columnWidth(2)+20 );
      expect( rowWidth(3) ).toEqual( columnWidth(3)+20 );
      expect( rowWidth(4) ).toEqual( columnWidth(4)+20 );
      expect( rowWidth(5) ).toEqual( columnWidth(5)+20 );
      expect( rowWidth(6) ).toEqual( columnWidth(6)+20 );
      expect( rowWidth(7) ).toEqual( columnWidth(7)+20 );
      expect( rowWidth(8) ).toEqual( columnWidth(8)+20 );
      expect( rowWidth(9) ).toEqual( columnWidth(9)+20 );
      expect( rowWidth(10) ).toEqual( columnWidth(10)+20 );
      expect( rowWidth(11) ).toEqual( columnWidth(11)+20 );
      expect( rowWidth(12) ).toEqual( columnWidth(12)+20 );
      expect( rowWidth(13) ).toEqual( columnWidth(13)+20 );
      expect( rowWidth(14) ).toEqual( columnWidth(14)+20 );
      expect( rowWidth(15) ).toEqual( columnWidth(15)+20 );
      expect( rowWidth(16) ).toEqual( columnWidth(16)+20 );
  });

});
