import Parser from './parser';
import {
  Token,
  TokenTypes,
} from './tokenizer';

it('consume gets first token', () => {
  const expressionString = '1 + 3';
  const parser = new Parser(expressionString);

  const consumedToken = parser.consume();
  const expectedToken = new Token(TokenTypes.NUMBER, '1');
  expect(consumedToken).toEqual(expectedToken);
});

it('lookAhead 0 returns current token', () => {
  const expressionString = '1 + 3';
  const parser = new Parser(expressionString);

  parser.consume();
  const lookAhead0Token = parser.lookAhead(0);
  const expectedToken = new Token(TokenTypes.NUMBER, '1');

  expect(lookAhead0Token).toEqual(expectedToken);
});

it('lookAhead 1 returns next token', () => {
  const expressionString = '1 + 3';
  const parser = new Parser(expressionString);

  parser.consume();
  const lookAhead0Token = parser.lookAhead(1);
  const expectedToken = new Token(TokenTypes.PLUS, '+');

  expect(lookAhead0Token).toEqual(expectedToken);
});

it('returns EOF when end of tokens is reached', () => {
  const expressionString = '1 + 3';
  const parser = new Parser(expressionString);

  expect(parser.consume()).toEqual(new Token(TokenTypes.NUMBER, '1'));
  expect(parser.consume()).toEqual(new Token(TokenTypes.PLUS, '+'));
  expect(parser.consume()).toEqual(new Token(TokenTypes.NUMBER, '3'));
  expect(parser.consume()).toEqual(new Token(TokenTypes.EOF));
});

it('parseExpression', () => {
  const expressionString = '1 + 2 * 3';
  const parser = new Parser(expressionString);

  const expression = parser.parseExpression();
  console.log('expression', expression);
});
