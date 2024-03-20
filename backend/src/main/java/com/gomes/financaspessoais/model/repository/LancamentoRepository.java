package com.gomes.financaspessoais.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gomes.financaspessoais.model.entity.Lancamento;

public interface LancamentoRepository extends JpaRepository<Lancamento, Long> {
	
}
