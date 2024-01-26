import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve inserir novos comentários', () => {
        const commentText = 'Testando...';
        const anotherCommentText = 'Outro comentário';
    
        render(<PostComment />);

        screen.debug()

        fireEvent.change(screen.getByTestId('comment-textarea'), { target: { value: commentText } });
        fireEvent.click(screen.getByText('Comentar'));

        fireEvent.change(screen.getByTestId('comment-textarea'), { target: { value: anotherCommentText } });
        fireEvent.click(screen.getByText('Comentar'));

        screen.debug()
    
        expect(screen.getByText(commentText)).toBeInTheDocument();
        expect(screen.getByText(anotherCommentText)).toBeInTheDocument();
      });
});