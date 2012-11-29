define(['base64',
        'chai'],
function(base64, chai) {
  var expect = chai.expect;

  describe("base64", function() {

    it('should export encode', function() {
      expect(base64.encode).to.exist;
      expect(base64.encode).to.be.a('function');
    });

    it('should export decode', function() {
      expect(base64.decode).to.exist;
      expect(base64.decode).to.be.a('function');
    });

  });
  
  describe("input 'JavaScript'", function() {
  
    it('should encode', function() {
      expect(base64.encode('JavaScript')).to.equal('SmF2YVNjcmlwdA==');
    });
    it('should decode', function() {
      expect(base64.decode('SmF2YVNjcmlwdA==')).to.equal('JavaScript');
    });
  
  });

  return { name: "test.base64" }
});
